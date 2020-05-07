module.exports = {
  
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
      questions: ['What is jSparrow Eclipse Plugin?'],
      answers: ['jSparrow Eclipse Plugin is ...'],
      nextSuggestions: ['whatIsRle', 'whatIsJMP', 'whatIsJGA'],
    },

    whatIsJMP: {
      questions: ['What is jSparrow Maven Plugin?'],
      answers: ['jSparrow Maven Plugin is....'],
      nextSuggestions: ['howToInstall', 'whatIsJGA', 'whatIsJEP'],
    },

    whatIsJGA: {
      questions: ['What is jSparrow Cloud App?'],
      answers: ['jSparrow Could App is....'],
      nextSuggestions: ['howToInstall', 'whatIsJMP', 'whatIsJEP'],
    },

    howDoIBenefit: {
      questions: ['What are the benefits of using jSparrow?', 'What are the benefits?'],
      answers: ['Remove code smells'],
      nextSuggestions: ['howToInstall', 'whatIsStarter', 'whichEditions'],
    },

    howToInstallJmp: {
      questions: ['How to install jSparrow Maven Plugin?'],
      answers: ['Download it from our repository and include it in your build script'],
      nextSuggestions: ['whatIsJMP', 'whichPlatforms', 'howManyRules'],
    },

    whichPlatforms: {
      questions: ['Which platorm does jSparrow support'],
      answers: ['jSparrow is available for Eclipse, Maven, and GitHub apps'],
      nextSuggestions: ['whatIsJEP', 'whatIsJMP', 'whatIsJGA'],
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
      questions: ['What is a jSparrow Rule?', 'What is a jSparrow refactoring Rule?', 'What is a Rule?'],
      answers: ['Fill the answers for jSparrow rule'],
      nextSuggestions: ['whatIsProfile'],
    },

    whatIsProfile: {
      questions: ['What is a profile?', 'howManyRules'],
      answers: ['A profile is a list of jSparrow rules. You can use profiles to group together the rules of your choice. '],
      nextSuggestions: ['whatIsRule', 'howDoIBenefit'],
    },

    howManyRules: {
      questions: ['How many rules are implemented in jSparrow?'],
      answers: ['Check our documentation space. '],
      nextSuggestions: ['whatIsReleaseSchedule', 'whichEditions'],
    }, 
    requestFeature: {
      questions: ['How to request a new feature?', 'Can I create my own rule?'],
      answers: ['If you have a suggestion, feel free to contact us. We will consider the recommendation for the upcoming releases.'],
      nextSuggestions: ['howDoIBenefit'],
    }, 
    whatIsReleaseSchedule: {
      questions: ['What is jSparrow release chedule?'],
      answers: ['Every third Thursday of each month.'],
      nextSuggestions: ['howManyRules', 'whichEditions'],
    },
    default: {
      questions: [],
      answers: ['Sorry, I didnt catch that. Please try again.'],
      nextSuggestions: ['whatIs', 'howToInstall', 'whichEditions', 'howDoIBenefit'],
    }
  
  };