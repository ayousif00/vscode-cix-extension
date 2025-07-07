# Contributing to CIX Language Support

Thank you for your interest in contributing to the CIX Language Support extension! This document provides guidelines for contributing to the project.

## How to Contribute

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When you are creating a bug report, please include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples** - Include sample CIX code that demonstrates the issue
- **Describe the behavior you observed** and **explain which behavior you expected to see**
- **Include screenshots** if they help explain the problem
- **Include your environment details** (OS, VS Code version, extension version)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:

- **Use a clear and descriptive title**
- **Provide a step-by-step description** of the suggested enhancement
- **Provide specific examples** of CIX code that would benefit from the enhancement
- **Explain why this enhancement would be useful** to most CIX Language Support users

### Code Contributions

#### Development Setup

1. Fork the repository
2. Clone your fork locally
3. Install dependencies: `npm install`
4. Make your changes
5. Test your changes by running the extension in development mode (F5 in VS Code)
6. Ensure the code compiles: `npm run compile`

#### Pull Request Process

1. **Create a feature branch** from `main`
2. **Make your changes** following the coding standards below
3. **Test your changes** thoroughly with real CIX files
4. **Update documentation** if needed (README.md, CHANGELOG.md)
5. **Create a pull request** with a clear title and description

#### Coding Standards

- **TypeScript**: Follow existing code style and patterns
- **TextMate Grammar**: Use clear, descriptive scope names
- **Documentation**: Update relevant documentation for any changes
- **Commit Messages**: Use clear, descriptive commit messages

### CIX Language Knowledge

If you're contributing language features, it helps to understand:

- **CIX file structure**: Block-based with BEGIN/END delimiters
- **Common macros**: ROUT, BG, LABEL, START_POINT, LINE_EP, etc.
- **Parameter syntax**: PARAM,NAME=key,VALUE=value format
- **Data types**: Numbers, strings, booleans (YES/NO), enums
- **Comments**: Lines starting with `-`

### Testing

When making changes to syntax highlighting:

1. Test with the provided `examples/sample.cix` file
2. Test with real CIX files from your projects
3. Verify that all language constructs are properly highlighted
4. Check that bracket matching and folding work correctly

### Adding New Language Features

When adding support for new CIX constructs:

1. **Update the TextMate grammar** (`syntaxes/cix.tmLanguage.json`)
2. **Add examples** to the `examples/` directory
3. **Update documentation** to describe the new features
4. **Add test cases** with real-world CIX code

## Recognition

Contributors will be recognized in:
- The CHANGELOG.md file
- The repository's contributors list
- Release notes for significant contributions

## Questions?

If you have questions about contributing, feel free to:
- Open an issue with the `question` label
- Start a discussion in the repository discussions

Thank you for helping make CIX Language Support better!