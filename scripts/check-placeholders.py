#!/usr/bin/env python3
"""Fail if LirCap production-placeholder markers remain in source/build output.

Scans common source and build directories for markers such as:
  data-placeholder="lircap-IMG-HERO-01"
  lircap-placeholder

This is intentionally dependency-free so it can run before the frontend scaffold exists.
"""
from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SCAN_DIRS = [
    "src",
    "public",
    "dist",
    "content",
]
IGNORE_DIR_PARTS = {
    ".git",
    "node_modules",
    ".astro",
}
PATTERNS = [
    re.compile(r'data-placeholder=["\']lircap-[^"\']+["\']'),
    re.compile(r"lircap-placeholder", re.IGNORECASE),
]
TEXT_SUFFIXES = {
    ".astro", ".html", ".tsx", ".jsx", ".ts", ".js", ".css", ".scss", ".md", ".mdx", ".json"
}


def should_scan(path: Path) -> bool:
    if any(part in IGNORE_DIR_PARTS for part in path.parts):
        return False
    return path.suffix.lower() in TEXT_SUFFIXES


def main() -> int:
    findings: list[str] = []
    for rel in SCAN_DIRS:
        base = ROOT / rel
        if not base.exists():
            continue
        for path in base.rglob("*"):
            if not path.is_file() or not should_scan(path):
                continue
            try:
                text = path.read_text(encoding="utf-8", errors="ignore")
            except OSError:
                continue
            for lineno, line in enumerate(text.splitlines(), 1):
                if any(pattern.search(line) for pattern in PATTERNS):
                    findings.append(f"{path.relative_to(ROOT)}:{lineno}: {line.strip()[:160]}")

    if findings:
        print("FAIL: LirCap placeholder markers remain:")
        for item in findings:
            print(f"- {item}")
        return 1
    print("PASS: no LirCap placeholder markers found")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
