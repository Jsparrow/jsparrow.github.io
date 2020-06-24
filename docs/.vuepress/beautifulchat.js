module.exports = {
  whichVersion: {
    questions: ['Which version do I need?'],
    answers: [
      'There are three jSparrow versions. [Explanation for starter, pro and free]',
    ],
    nextSuggestions: ['whichEditions', 'whereToGet'],
  },

  whereToGet: {
    questions: ['Where can I get jSparrow Pro?'],
    answers: [
      'I want to buy a single license [redirect to Get jSparrow page.]. I want to get an offer for my company [redirect to the contact form]. ',
    ],
    nextSuggestions: ['howManyRules', 'whichEditions', 'whichVersion'],
  },

  talkToHuman: {
    questions: ['May I talk to a human?', 'I want to talk to a human.'],
    answers: [
      '[Contact us at support@jsparrow.eu], [I want to get an offer.] [Please contact me], [I want a web demo -> redirect to a contact form]',
    ],
    nextSuggestions: ['howToInstall', 'whereToGet', 'reportBug'],
  },

  interactiveRules: {
    questions: ['Are there interactive rules?'],
    answers: ['[Logging], [Renaming]'],
    nextSuggestions: ['howToInstall', 'whereToGet', 'reportBug'],
  },

  howDoesItWork: {
    questions: ['How does jSparrow work?'],
    answers: [
      'Integrated in Eclipse IDE, Select rules, diff view, summary. [Select rules, preview changes, save accepted changes] ',
    ],
    nextSuggestions: ['howToInstall', 'whereToGet', 'reportBug'],
  },

  help: {
    questions: ['Hello there! May I help you with something?'],
    answers: [],
    nextSuggestions: ['noThanks', 'whatIs', 'suggestion', 'whereToGet'],
  },

  noThanks: {
    questions: [
      "I'm just having a look.",
      'no',
      'no.',
      'no!',
      'No',
      'No.',
      'No!',
    ],
    answers: ['Ok. Enjoy visiting our documentation!'],
    nextSuggestions: ['whereToGet', 'bugReport', 'whatIs'],
  },

  suggestion: {
    questions: ['I want to suggest a rule.', 'I have a suggestion'],
    answers: [
      "Awesome! I recommend creating a '*Rule suggestion*' ticket at jSparrow Help Center  https://jsparrow.atlassian.net/servicedesk/. Alternatively, you can send an email to support@jsparrow.eu",
    ],
    nextSuggestions: ['bugReport', 'suggestion', 'howManyRules'],
  },

  bugReport: {
    questions: ['I want to report a bug.'],
    answers: [
      'Thank you for your valuable feedback ;) ! The recommended way to do that is to file a bug report at jSparrow Help Center https://jsparrow.atlassian.net/servicedesk. Alternatively, you can send an email to support@jsparrow.eu',
    ],
    nextSuggestions: ['bugReport', 'suggestion', 'howManyRules'],
  },

  whatIs: {
    questions: ['What is jSparrow?', 'What does jSparrow do?'],
    answers: [
      'jSparrow is a tool that provides automatic refactoring of Java sources',
      'jSparrow is a tool that refactors Java code automatically for you. Thus, saving maintenance time',
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
      'You can find jSparrow in Eclipse Marketplace. You can also install jSparrow directly from the update site https://update.jsparrow.eu',
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
    nextSuggestions: ['whatIsRule', 'whatIsJMP', 'whatIsJGA'],
  },

  whatIsJMP: {
    questions: ['What is jSparrow Maven Plugin?'],
    answers: [
      'jSparrow Maven Plugin (JMP) is a continuous integration tool to apply automatic refactoring. It applies nearly the same rules as jSparrow Eclipse Plugin but works without user interaction. The rule selection and configuration can be provided through yml files.',
    ],
    nextSuggestions: ['howToInstall', 'whatIsJGA', 'whatIsJEP'],
  },

  whatIsJGA: {
    questions: ['What is jSparrow Cloud App?'],
    answers: [
      "jSparrow Could App (JCA) is the integration of jSparrow's refactoring on a GitHub app. JCA is triggered upon creation of new pull requests. The rule selection and configuration can be provided through yml files.",
    ],
    nextSuggestions: ['howToInstall', 'whatIsJMP', 'whatIsJEP'],
  },

  howDoIBenefit: {
    questions: [
      'What are the benefits of using jSparrow?',
      'What are the benefits?',
    ],
    answers: [
      'Remove code smells',
    ] /* Write something for most important tags */,
    nextSuggestions: ['howToInstall', 'whatIsStarter', 'whichEditions'],
  },

  howToInstallJmp: {
    questions: ['How to install jSparrow Maven Plugin?'],
    answers: [
      'Download it from our repository and include it in your build script',
    ],
    nextSuggestions: ['whatIsJMP', 'whichPlatforms', 'howManyRules'],
  },

  whichPlatforms: {
    questions: ['Which platforms does jSparrow support'],
    answers: ['jSparrow is available for Eclipse, Maven, and GitHub apps'],
    nextSuggestions: ['whatIsJEP', 'whatIsJMP', 'whatIsJGA'],
  },

  whatIsStarter: {
    questions: ['What is jSparrow Starter?'],
    answers: [
      'jSparrow starter allows to apply 15 Rules for FREE. After filling a registration form you will receive a license key for activating jSparrow Starter. Afterwards you can apply the changes of jSparrow rules tagged as FREE.',
    ],
    nextSuggestions: ['howDoIBenefit', 'whatIsFree', 'whatIsPro', 'whatIsRule'],
  },
  whatIsFree: {
    questions: ['What is jSparrow Free?'],
    answers: [
      'jSparrow Free allows to view the changes computed by jSparrow rules. After installing jSparrow, you will automatically have jSparrow Free. It does not require licensing or registration.',
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
    answers: [
      'jSparrow Pro provides the full power of jSparrow rules. You can view and apply all changes from all jSparrow rules',
    ],
    nextSuggestions: ['howDoIBenefit', 'whatIsStarter', 'whatIsRule'],
  },

  whatIsRule: {
    questions: [
      'What is a jSparrow Rule?',
      'What is a jSparrow refactoring Rule?',
      'What is a Rule?',
    ],
    answers: ['....'],
    nextSuggestions: ['whatIsProfile'],
  },

  whatIsProfile: {
    questions: ['What is a profile?'],
    answers: [
      'A profile is a list of jSparrow rules. You can create any number of profiles with the rules of your choice. Profiles can be exported from jSparrow Eclipse to jSparrow Maven Plugin. The intention is to simplify the selection of the preferred rules.',
    ],
    nextSuggestions: ['whatIsRule', 'howDoIBenefit', 'howManyRules'],
  },

  howManyRules: {
    questions: ['How many rules are implemented in jSparrow?'], /* Maybe we can remove this. We will for sure forget to update it. */
    answers: ['Check our documentation space. '],
    nextSuggestions: ['whatIsReleaseSchedule', 'whichEditions'],
  },
  requestFeature: { 
    questions: ['How to request a new feature?', 'Can I create my own rule?'], /* This is a duplicate of 'suggestion' */
    answers: [
      'If you have a suggestion, feel free to contact us. We will consider the recommendation for the upcoming releases.',
    ],
    nextSuggestions: ['howDoIBenefit'],
  },
  whatIsReleaseSchedule: {
    questions: ['What is the release schedule?'],
    answers: ['A new jSparrow version is released monthly. Each release contains at least one new rule. Every third release contains at least three rules. The releases take place on the third Thursday of the month.'],
    nextSuggestions: ['howManyRules', 'whichEditions'],
  },
  default: {
    questions: [],
    answers: ['Sorry, I didn\'t catch that. Would you like to contact a human?'],
    nextSuggestions: ['talkToHuman', 'whatIs', 'whereToGet'],
  },
};