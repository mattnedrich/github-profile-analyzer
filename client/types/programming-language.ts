export interface ProgrammingLanguage {
  name: LanguageName,
  gitHubName: string,
  displayName: string,
  iconName: string,
}

export type LanguageName = "C" | "C_PLUS_PLUS" | "C_SHARP" | "CLOJURE" | "COFFESCRIPT" | "CSS"
  | "EMACS_LISP"
  | "F_SHARP"
  | "GO"
  | "HASKELL"
  | "HTML"
  | "JAVA" | "JAVASCRIPT"
  | "OBJECTIVE_C"
  | "PERL" | "PHP" | "PYTHON"
  | "RUBY"
  | "SHELL" | "SWIFT" | "SCALA"
  | "TYPESCRIPT"
  | "UNKNOWN";

export const UnknownLanguage: ProgrammingLanguage = {
  name: "UNKNOWN",
  gitHubName: "unknown",
  iconName: "icon-script",
  displayName: "Script"
};

export function createFromGitHubName(gitHubName: string): ProgrammingLanguage {
  console.log(gitHubName);
  switch(gitHubName.toLowerCase()) {
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
      iconName: "icon-cplusplus",
      gitHubName: "cplusplus",
      displayName: "C++"
    };
  case 'c#':
    return {
      name: "C_SHARP",
      iconName: "icon-csharp",
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
      iconName: "devicon-go-line colored devicon-sourced",
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
      iconName: "icon-html",
      gitHubName: "html",
      displayName: "HTML"
    };
  case 'java':
    return {
      name: "JAVA",
      iconName: "icon-java",
      gitHubName: "java",
      displayName: "Java"
    };
  case 'javascript':
    return {
      name: "JAVASCRIPT",
      iconName: "icon-javascript",
      gitHubName: "javascript",
      displayName: "JavaScript"
    };
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
      iconName: "icon-php",
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
      iconName: "devicon-apple-original colored devicon-sourced",
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
      gitHubName: gitHubName,
      iconName: "icon-script",
      displayName: gitHubName,
    };
  }
}
