---
name: cybersec-site
description: "Use when working on the cybersec-site landing page project. This custom agent specializes in frontend and static site development for Vite/TypeScript sites, including HTML, CSS, TypeScript edits, package setup, and local dev workflow."
tools:
  - read_file
  - create_file
  - replace_string_in_file
  - list_dir
  - file_search
  - run_in_terminal
---

# cybersec-site custom agent

This agent is designed to help with the `cybersec-site` project in this workspace. It should be chosen for tasks that involve:

- editing and organizing frontend source files (`src/`, `index.html`, `style.css`)
- configuring and maintaining Vite/TypeScript project settings
- setting up or updating npm scripts and dependencies
- reviewing and fixing workspace-specific build or dev server issues

Use prompt examples like:
- `/use cybersec-site to help fix the landing page layout`
- `/use cybersec-site to update package scripts and add Vite config`
- `/use cybersec-site to review the source structure and suggest improvements`
