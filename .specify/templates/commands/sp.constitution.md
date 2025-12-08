# /sp.constitution

## Purpose
This command regenerates the project's `constitution.md` file based on the latest specifications and guidelines. It ensures that the governing document remains consistent with project principles and requirements.

## Usage
`/sp.constitution`

## Description
Executing this command will trigger Spec-Kit Plus and Claude Code to re-evaluate and regenerate the `.specify/memory/constitution.md` file. This process ensures that the constitution incorporates any updates from other `.spec` files or project-wide governance changes.

## Inputs
- **Project Context:** The current project configuration and any relevant `.spec` files.
- **User Input (Optional):** Specific arguments or directives provided by the user to override or augment constitution generation parameters.

## Outputs
- **Modified File:** `.specify/memory/constitution.md` (updated with the latest content).
- **Confirmation:** A summary message indicating successful regeneration and the new version number of the constitution.

## Constraints
- Requires an active Spec-Kit Plus and Claude Code environment.
- Manual edits to `constitution.md` will be overwritten upon regeneration.
- Adherence to `constitution.md` itself is paramount during regeneration to ensure consistency.

## Example
```bash
/sp.constitution
```
