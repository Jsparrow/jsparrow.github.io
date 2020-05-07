module.exports = [
  {
    whatIs: {
      questions: ['What is jSparrow?', 'What does jSparrow do?'],
      answers: [
        'jSparrow is a tool that provides automatic refactoring of Java sources',
        'jSparrow is a tool that refactors Java code for you, powered by the Eclipse Java compiler',
      ],
      nextSuggestions: ['howToInstall', 'whichEditions', 'howDoIBenefit'],
    },

    howToInstall: {
      questions: [
        'How to install jSparrow?',
        'How to install?',
        'How do I install?',
      ],
      answers: [
        'You can find jSparrow in Eclipse Marketplace. You can also install jSparrow directly from our update site https://update.jsparrow.eu',
      ],
      nextSuggestions: ['howToInstallJmp', 'whichPlatforms'],
    },

    whichEditions: {
      questions: [
        'Which jSparrow editions are available?',
        'Which editions are available?',
        'jSparrow versions?',
        'versions?',
      ],
      answers: [
        'There are three jSparrow editions: jSparrow Free, jSparrow Starter, and jSparrow Pro',
      ],
      nextSuggestions: ['whatIsStarter', 'whatIsFree', 'whatIsPro'],
    },

    whatIsJEP: {
      questions: [],
      answers: [],
      nextSuggestions: [],
    },

    whatIsJMP: {
      questions: [],
      answers: [],
      nextSuggestions: [],
    },

    whatIsJGA: {
      questions: [],
      answers: [],
      nextSuggestions: [],
    },

    howDoIBenefit: {
      questions: [],
      answers: [],
      nextSuggestions: [],
    },

    howToInstallJmp: {
      questions: [],
      answers: [],
      nextSuggestions: [],
    },

    whichPlatforms: {
      questions: [],
      answers: [],
      nextSuggestions: [],
    },

    whatIsStarter: {
      questions: ['What is jSparrow Starter?'],
      answers: [
        'jSparrow starter allows to apply 15 Rules for FREE. You can register to jSparrow Starter and you will be able apply jSparrow rules tagged as Free .',
      ],
      nextSuggestions: [
        'howDoIBenefit',
        'whatIsFree',
        'whatIsPro',
        'whatIsRule',
      ],
    },
    whatIsFree: {
      questions: ['What is jSparrow Free?'],
      answers: [
        'jSparrow Free allows to view the changes computed by jSparrow rules',
      ],
      nextSuggestions: [
        'howDoIBenefit',
        'whatIsStarter',
        'whatIsPro',
        'whatIsRule',
      ],
    },
    whatIsPro: {
      questions: ['What is jSparrow Pro?'],
      answers: ['jSparrow Pro provides the full power of jSparrow rules. You can view and apply all jSparrow rules'],
      nextSuggestions: [
        'howDoIBenefit',
        'whatIsStarter',
        'whatIsRule'
      ],
    },

    whatIsRule: {
      questions: [],
      answers: [],
      nextSuggestions: [],
    },

    whatIsProfile: {
      questions: [],
      answers: [],
      nextSuggestions: [],
    },
  },
];