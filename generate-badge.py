#!/usr/bin/env python3
"""
Scans solutions/ folders and generates an SVG progress badge.
Runs automatically via GitHub Actions on every push.
"""
import os

PATTERNS = [
    ("Arrays & Hashing",      "01-arrays-and-hashing",      6),
    ("Two Pointers",          "02-two-pointers",             5),
    ("Sliding Window",        "03-sliding-window",           5),
    ("Stack",                 "04-stack",                    4),
    ("Binary Search",         "05-binary-search",            5),
    ("Linked List",           "06-linked-list",              6),
    ("Trees",                 "07-trees",                    7),
    ("Heap / Priority Queue", "08-heap",                     4),
    ("Backtracking",          "09-backtracking",             4),
    ("Graphs",                "10-graphs",                   5),
    ("Dynamic Programming",   "11-dynamic-programming",      6),
    ("Intervals & Greedy",    "12-intervals-and-greedy",     4),
]

SOLUTIONS_DIR = os.path.join(os.path.dirname(__file__), "solutions")
CODE_EXTENSIONS = {".js", ".ts"}


def count_solutions(folder):
    path = os.path.join(SOLUTIONS_DIR, folder)
    if not os.path.isdir(path):
        return 0
    return sum(
        1 for f in os.listdir(path)
        if os.path.isfile(os.path.join(path, f))
        and os.path.splitext(f)[1].lower() in CODE_EXTENSIONS
    )


def generate_svg(rows, total_solved, total_problems):
    pct = round(total_solved / total_problems * 100) if total_problems else 0
    bar_w = round(440 * total_solved / total_problems) if total_problems else 0
    row_height = 28
    header_h = 90
    h = header_h + len(rows) * row_height + 50

    lines = []
    lines.append(f'<svg xmlns="http://www.w3.org/2000/svg" width="540" height="{h}" viewBox="0 0 540 {h}">')
    lines.append('<style>')
    lines.append('  text { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif; }')
    lines.append('  .title { font-size: 16px; font-weight: 600; fill: #e9e7e2; }')
    lines.append('  .sub { font-size: 12px; fill: #97969f; }')
    lines.append('  .row-label { font-size: 12px; fill: #c2c0b6; }')
    lines.append('  .row-count { font-size: 11px; fill: #97969f; font-family: "SF Mono", Consolas, monospace; }')
    lines.append('</style>')

    # Card
    lines.append(f'<rect width="540" height="{h}" rx="10" fill="#15161b" stroke="#2c2f3d" stroke-width="1"/>')

    # Header
    lines.append('<text class="title" x="24" y="36">leetcode.log</text>')
    lines.append(f'<text class="sub" x="24" y="56">{total_solved}/{total_problems} solved · {pct}% · prepping for interviews</text>')

    # Overall bar
    lines.append('<rect x="24" y="68" width="440" height="6" rx="3" fill="#232633"/>')
    if bar_w > 0:
        lines.append(f'<rect x="24" y="68" width="{bar_w}" height="6" rx="3" fill="#5fc7b8"/>')

    # Pattern rows
    y = header_h
    for name, solved, total in rows:
        row_pct = solved / total if total else 0
        pw = round(120 * row_pct)
        bar_color = "#5fc7b8" if solved > 0 else "#232633"
        check = "✓" if solved == total else ""

        lines.append(f'<text class="row-label" x="24" y="{y + 18}">{check} {name}</text>')
        lines.append(f'<rect x="280" y="{y + 9}" width="120" height="5" rx="2.5" fill="#232633"/>')
        if pw > 0:
            lines.append(f'<rect x="280" y="{y + 9}" width="{pw}" height="5" rx="2.5" fill="{bar_color}"/>')
        lines.append(f'<text class="row-count" x="410" y="{y + 18}">{solved}/{total}</text>')
        y += row_height

    lines.append('</svg>')
    return "\n".join(lines)


def main():
    rows = []
    total_solved = 0
    total_problems = 0

    for name, folder, expected in PATTERNS:
        solved = count_solutions(folder)
        rows.append((name, solved, expected))
        total_solved += solved
        total_problems += expected

    svg = generate_svg(rows, total_solved, total_problems)

    out = os.path.join(os.path.dirname(__file__), "leetcode-badge.svg")
    with open(out, "w", encoding="utf-8") as f:
        f.write(svg)

    print(f"Badge generated: {total_solved}/{total_problems} solved")


if __name__ == "__main__":
    main()
