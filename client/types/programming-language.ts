export interface ProgrammingLanguage {
  name: LanguageName,
  gitHubName: string,
  displayName: string,
  iconName: string,
}

export type LanguageName = "C" | "C_PLUS_PLUS" | "C_SHARP" | "CLOJURE" | "COFFESCRIPT" | "CSS"
  | "ELM" | "EMACS_LISP"
  | "F_SHARP"
  | "GO"
  | "HASKELL"
  | "HTML"
  | "JAVA" | "JAVASCRIPT"
  | "NONE"
  | "OBJECTIVE_C"
  | "PERL" | "PHP" | "PYTHON"
  | "RUBY" | "RUST"
  | "SHELL" | "SWIFT" | "SCALA"
  | "TYPESCRIPT"
  | "UNKNOWN";

export const All: ProgrammingLanguage[] = [
  createFromGitHubName("c"),
  createFromGitHubName("c++"),
  createFromGitHubName("c#"),
  createFromGitHubName("clojure"),
  createFromGitHubName("coffeescript"),
  createFromGitHubName("css"),
  createFromGitHubName("elm"),
  createFromGitHubName("go"),
  createFromGitHubName("haskell"),
  createFromGitHubName("html"),
  createFromGitHubName("java"),
  createFromGitHubName("javascript"),
  createFromGitHubName("objective-c"),
  createFromGitHubName("perl"),
  createFromGitHubName("php"),
  createFromGitHubName("python"),
  createFromGitHubName("ruby"),
  createFromGitHubName("rust"),
  createFromGitHubName("swift"),
  createFromGitHubName("scala"),
  createFromGitHubName("typescript"),
];

export const UnknownLanguage: ProgrammingLanguage = {
  name: "UNKNOWN",
  gitHubName: "unknown",
  iconName: "icon-script",
  displayName: "Script"
};

export const NoLanguage: ProgrammingLanguage = {
  name: "NONE",
  gitHubName: null,
  iconName: "devicon-devicon-plain",
  displayName: "No Language"
}

export function createFromGitHubName(gitHubName: string): ProgrammingLanguage {
  const languageName = gitHubName || "NONE";
  switch(languageName.toLowerCase()) {
  case 'c':
    return {
      name: "C",
      iconName: "icon-c",
      gitHubName: "c",
      displayName: "C"
    };
  case 'c++':
    return {
      name: "C_PLUS_PLUS",
      iconName: "devicon-cplusplus-plain colored",
      gitHubName: "cplusplus",
      displayName: "C++"
    };
  case 'c#':
    return {
      name: "C_SHARP",
      iconName: "devicon-csharp-plain colored",
      gitHubName: "csharp",
      displayName: "C#"
    };
  case 'clojure':
    return {
      name: "CLOJURE",
      iconName: "icon-clojure",
      gitHubName: "clojure",
      displayName: "Clojure"
    };
  case 'coffeescript':
    return {
      name: "COFFESCRIPT",
      iconName: "devicon-coffeescript-original colored devicon-sourced",
      gitHubName: "coffeescript",
      displayName: "Coffeescript"
    };
  case 'css':
    return {
      name: "CSS",
      iconName: "icon-css",
      gitHubName: "css",
      displayName: "CSS"
    };
  case 'emacs lisp':
    return {
      name: "EMACS_LISP",
      iconName: "icon-script",
      gitHubName: "emacs lisp",
      displayName: "Emacs Lisp"
    };
  case 'elm':
    return {
      name: "ELM",
      iconName: "icon-elm",
      gitHubName: "elm",
      displayName: "Elm"
    };
  case 'f#':
    return {
      name: "F_SHARP",
      iconName: "devicon-dot-net-plain colored devicon-sourced",
      gitHubName: "fsharp",
      displayName: "F#"
    };
  case 'go':
    return {
      name: "GO",
      iconName: "devicon-go-plain colored",
      gitHubName: "go",
      displayName: "Go"
    };
  case 'haskell':
    return {
      name: "HASKELL",
      iconName: "icon-haskell",
      gitHubName: "haskell",
      displayName: "Haskell"
    };
  case 'html':
    return {
      name: "HTML",
      iconName: "devicon-html5-plain colored",
      gitHubName: "html",
      displayName: "HTML"
    };
  case 'java':
    return {
      name: "JAVA",
      iconName: "devicon-java-plain colored",
      gitHubName: "java",
      displayName: "Java"
    };
  case 'javascript':
    return {
      name: "JAVASCRIPT",
      iconName: "devicon-javascript-plain colored",
      gitHubName: "javascript",
      displayName: "JavaScript"
    };
  case 'none':
    return NoLanguage;
  case 'objective-c':
    return {
      name: "OBJECTIVE_C",
      iconName: "icon-objc",
      gitHubName: "objectivec",
      displayName: "Objective C"
    };
  case 'perl':
    return {
      name: "PERL",
      iconName: "icon-perl",
      gitHubName: "perl",
      displayName: "Perl"
    };
  case 'php':
    return {
      name: "PHP",
      iconName: "devicon-php-plain colored",
      gitHubName: "php",
      displayName: "PHP"
    };
  case 'python':
    return {
      name: "PYTHON",
      iconName: "icon-python",
      gitHubName: "python",
      displayName: "Python"
    };
  case 'ruby':
    return {
      name: "RUBY",
      iconName: "icon-ruby",
      gitHubName: "ruby",
      displayName: "Ruby"
    };
  case 'rust':
    return {
      name: "RUST",
      iconName: "icon-rust",
      gitHubName: "rust",
      displayName: "Rust"
    };
  case 'shell':
    return {
      name: "SHELL",
      iconName: "icon-shell",
      gitHubName: "shell",
      displayName: "Shell"
    };
  case 'swift':
    return {
      name: "SWIFT",
      iconName: "devicon-swift-plain",
      gitHubName: "swift",
      displayName: "Swift"
    };
  case 'scala':
    return {
      name: "SCALA",
      iconName: "icon-scala",
      gitHubName: "scala",
      displayName: "Scala"
    };
  case 'typescript':
    return {
      name: "TYPESCRIPT",
      iconName: "devicon-typescript-plain",
      gitHubName: "typescript",
      displayName: "TypeScript"
    };
  default:
    return {
      name: "UNKNOWN",
      gitHubName: languageName,
      iconName: "devicon-devicon-plain",
      displayName: languageName,
    };
  }
}
