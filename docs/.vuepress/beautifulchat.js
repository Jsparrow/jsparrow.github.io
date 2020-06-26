module.exports = {
  whichVersionDoINeed: {
    questions: ['Which version do I need?'],
    answers: [
      'In case you want to analyze the code and learn about recommended coding practices then you can use jSparrow *Free*. jSparrow *Starter* is also free and it allows you to apply *15 refactoring rules*. You can get the Starter activation code by filling out a registration form. If you want to improve your source base using *all rules* then you can get jSparrow *Pro*.',
    ],
    nextSuggestions: ['whichEditions', 'whereToGet', 'whatIsPro', 'whatIsStarter', 'whatIsFree', 'talkToHuman'],
  },

  whereToGet: {
    questions: ['Where can I get jSparrow Pro?'],
    answers: [
      'To order a new license, please visit https://jsparrow.eu/get-jsparrow/. In case you want a special offer for your company, feel free to contact us directly at https://jsparrow.eu/contact/.',
    ],
    nextSuggestions: ['whatIs', 'howToInstall', 'whichEditions', 'whichVersionDoINeed', 'talkToHuman'],
  },

  talkToHuman: {
    questions: ['May I talk to a human?', 'I want to talk to a human.', 'How can I reach you?'],
    answers: [
      'Sure, our team will be happy to respond to your inquiries. In case you want technical support, please send an email to support@jsparrow.eu. This will automatically create a ticket at jSparrow Help Center. If you want a special offer for jSparrow Pro, please fill out the contact form at https://jsparrow.eu/contact/',
    ],
    nextSuggestions: ['howToInstall', 'whatIs', 'whereToGet', 'bugReport', 'suggestion'],
  },

  interactiveRules: {
    questions: ['Are there interactive rules?'],
    answers: ['Yes, there are rules that can be configured to fit your needs. E.g., in the ‘Rename Fields’ rule you can configure how to generate the new field names; in the ‘Standard Logger’ rule you can configure which logging level to use in different scenarios.'],
    nextSuggestions: ['howToInstall', 'whereToGet', 'bugReport', 'talkToHuman'],
  },

  canICreateMyOwnRule: {
    questions: ['Can I create my own rule?'],
    answers: ['The rule engine does not allow customers to create new rules. Reasons include: transforming code is a mission-critical task. Each rule has to be thoroughly studied and tested before going to production. However, we are open to suggestions. If you want to see a feature in jSparrow, feel free to contact us.'],
    nextSuggestions: ['suggestion', 'whereToGet', 'interactiveRules', 'howDoesItWork', 'talkToHuman']
  },

  howDoesItWork: {
    questions: ['How does jSparrow work?'],
    answers: [
      'When integrated into Eclipse, you can start jSparrow in a Java file, package, or project. After selecting the rules you want to apply, jSparrow computes the changes and displays them side-by-side on a diff view. You can choose to unselect changes on certain files for different rules. The original sources are not affected until the changes are approved.',
    ],
    nextSuggestions: ['howToInstall', 'whereToGet', 'bugReport', 'talkToHuman'],
  },

  help: {
    questions: ['Hello there! May I help you with something?'],
    answers: [],
    nextSuggestions: ['noThanks', 'whatIs', 'suggestion', 'whereToGet', 'bugReport', 'talkToHuman'],
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
    nextSuggestions: ['whereToGet', 'bugReport', 'suggestion', 'whatIs', 'talkToHuman'],
  },

  suggestion: {
    questions: ['I want to suggest a rule.', 'I have a suggestion'],
    answers: [
      "Awesome! I recommend creating a '*Rule suggestion*' ticket at jSparrow Help Center  https://jsparrow.atlassian.net/servicedesk/. Alternatively, you can send an email to support@jsparrow.eu",
    ],
    nextSuggestions: ['bugReport', 'howManyRules', 'whereToGet', 'talkToHuman'],
  },

  bugReport: {
    questions: ['I want to report a bug.', 'I want to create a bug report'],
    answers: [
      'Thank you for your valuable feedback! The recommended way to do that is to file a bug report at jSparrow Help Center https://jsparrow.atlassian.net/servicedesk. Alternatively, you can send an email to support@jsparrow.eu',
    ],
    nextSuggestions: ['whereToGet', 'suggestion', 'howManyRules', 'talkToHuman'],
  },

  whatIs: {
    questions: ['What is jSparrow?', 'What does jSparrow do?'],
    answers: [
      'jSparrow is a tool that provides automatic refactoring of Java sources',
      'jSparrow is a tool that refactors Java code automatically for you. Thus, saving maintenance time',
    ],
    nextSuggestions: ['howToInstall', 'whichEditions', 'howDoIBenefit', 'howDoesItWork', 'whereToGet', 'talkToHuman'],
  },

  howToInstall: {
    questions: [
      'How to install jSparrow?',
      'How to install?',
      'How do I install?',
    ],
    answers: [
      'You can drag the installation button from the Eclipse Marketplace into your IDE. You can also install jSparrow directly from the update site https://update.jsparrow.eu',
    ],
    nextSuggestions: ['howToInstallJmp', 'whichPlatforms', 'whereToGet', 'talkToHuman'],
  },

  whichEditions: {
    questions: [
      'Which jSparrow versions are available?',
      'Which jSparrow editions are available?',
      'Which editions are available?',
      'Which versions are available?',
      'jSparrow versions?',
      'versions?',
    ],
    answers: [
      'There are three jSparrow editions: jSparrow *Free*, jSparrow *Starter*, and jSparrow *Pro*.',
    ],
    nextSuggestions: ['whatIsStarter', 'whatIsFree', 'whatIsPro', 'whichVersionDoINeed', 'whereToGet', 'talkToHuman'],
  },

  whatIsJEP: { 
    questions: ['What is jSparrow Eclipse Plugin?'],
    answers: ['jSparrow Eclipse Plugin (JEP) is the integration of jSparrow in the Eclipse IDE. JEP is our most recommended product as it has a rich user interface that allows customers to have full control over the refactorings they perform on the source base.'],
    nextSuggestions: ['whatIsRule', 'whatIsJMP', 'whatIsJGA', 'whereToGet', 'howDoesItWork', 'talkToHuman'],
  },

  whatIsJMP: {
    questions: ['What is jSparrow Maven Plugin?'],
    answers: [
      'jSparrow Maven Plugin (JMP) is a continuous integration tool to apply automatic refactoring. It applies nearly the same rules as jSparrow Eclipse Plugin but works without user interaction. The rule selection and configuration can be provided through yml files.',
    ],
    nextSuggestions: ['howToInstall', 'whatIsJGA', 'whatIsJEP', 'whereToGet', 'talkToHuman'],
  },

  whatIsJGA: {
    questions: ['What is jSparrow Cloud App?'],
    answers: [
      "jSparrow Could App (JCA) is the integration of jSparrow's refactoring on a GitHub app. JCA is triggered upon creation of new pull requests. The rule selection and configuration can be provided through yml files.",
    ],
    nextSuggestions: ['whereToGet', 'howToInstall', 'whatIsJMP', 'whatIsJEP', 'talkToHuman'],
  },

  howDoIBenefit: {
    questions: [
      'What are the benefits of using jSparrow?',
      'What are the benefits?',
    ],
    answers: [
      'Among others, the benefits you get from jSparrow are: *Reduce repetitive work* - avoid repeating trivial but yet important cleanups manually over the entire source base. Thus, you have more time to focus on your tasks and eliminate human mistakes, too.; *Boost performance* - since Java keeps evolving, there are always new features introduced that are more performant than older alternatives. jSparrow offers various refactorings with a focus on performance improvement.; *Fix security leaks* - jSparrow provides a list of rules for preventing injection attacks of different kinds.;*Improve readability* - developers spend a significant amount of time reading existing code. jSparrow helps with making the code more readable and reducing cognitive complexity.',
    ] /* Write something for most important tags */,
    nextSuggestions: ['whereToGet', 'howToInstall', 'whatIsStarter', 'whichEditions', 'talkToHuman'],
  },

  howToInstallJmp: {
    questions: ['How to install jSparrow Maven Plugin?'],
    answers: [
      'To install JMP you simply need to add the plugin repository in the pom.xml file or in the settings.xml file. No additional downloads are required. The refactoring can be started from the command line. Further configuration can be provided with command line parameters, profiles, or yml files. See also http://localhost:8081/maven/getting-started.html#installation',
    ],
    nextSuggestions: ['whatIsJMP', 'whichPlatforms', 'howManyRules', 'whereToGet', 'talkToHuman'],
  },

  whichPlatforms: {
    questions: ['In which platforms is jSparrow integrated to?'],
    answers: ['jSparrow is integrated into Eclipse IDE as jSparrow Eclipse Plugin, into Maven as jSparrow Maven Plugin, and into GitHub as jSparrow Cloud App.'],
    nextSuggestions: ['whatIsJEP', 'whatIsJMP', 'whatIsJGA', 'whereToGet', 'talkToHuman'],
  },

  whatIsStarter: {
    questions: ['What is jSparrow Starter?'],
    answers: [
      'jSparrow starter allows to apply 15 Rules for FREE. After filling a registration form you will receive a license key for activating jSparrow Starter. Afterwards you can apply the changes of jSparrow rules tagged as FREE.',
    ],
    nextSuggestions: ['howDoIBenefit', 'whatIsFree', 'whatIsPro', 'whatIsRule', 'whereToGet', 'talkToHuman'],
  },
  whatIsFree: {
    questions: ['What is jSparrow Free?'],
    answers: [
      'jSparrow Free allows to view the changes computed by jSparrow rules. After installing jSparrow, you will automatically have jSparrow Free. It does not require licensing or registration.',
    ],
    nextSuggestions: [
      'whereToGet',
      'howDoIBenefit',
      'whatIsStarter',
      'whatIsPro',
      'whatIsRule',
      'talkToHuman'
    ],
  },
  whatIsPro: {
    questions: ['What is jSparrow Pro?'],
    answers: [
      'jSparrow Pro provides the full power of jSparrow rules. You can view and apply all changes from all jSparrow rules.',
    ],
    nextSuggestions: ['howDoIBenefit', 'whatIsStarter', 'whatIsRule', 'talkToHuman'],
  },

  whatIsRule: {
    questions: [
      'What is a jSparrow Rule?',
      'What is a jSparrow refactoring Rule?',
      'What is a Rule?',
    ],
    answers: ['A jSparrow Rule is a definition of a granular refactoring performed by jSparrow to improve a code snippet. The scope of a single rule is very specific. E.g., ‘Use Functional Interface’ rule transforms when possible anonymous classes to lambda expressions. Rules can be combined to obtain a broader refactoring.'],
    nextSuggestions: ['whatIsProfile', 'whereToGet', 'howDoIBenefit', 'interactiveRules', 'talkToHuman'],
  },

  whatIsProfile: {
    questions: ['What is a profile?'],
    answers: [
      'A profile is a list of jSparrow rules. You can create any number of profiles with the rules of your choice. Profiles can be exported from jSparrow Eclipse to jSparrow Maven Plugin. The intention is to define company standards as sets of rules and to simplify the rule selection.',
    ],
    nextSuggestions: ['whatIsRule', 'howDoIBenefit', 'howManyRules', 'whereToGet', 'talkToHuman'],
  },

  howManyRules: {
    questions: ['How many rules are implemented in jSparrow?'], /* Maybe we can remove this. We will for sure forget to update it. */
    answers: ['By now, there are over 78 refactoring rules implemented in jSparrow.'],
    nextSuggestions: ['whatIsReleaseSchedule', 'whichEditions', 'whereToGet', 'talkToHuman'],
  },
  requestFeature: { 
    questions: ['How to request a new feature?', 'Can I create my own rule?'], /* This is a duplicate of 'suggestion' */
    answers: [
      'If you have a suggestion, feel free to contact us. We will consider the recommendation for the upcoming releases.',
    ],
    nextSuggestions: ['howDoIBenefit', 'whereToGet', 'talkToHuman'],
  },
  whatIsReleaseSchedule: {
    questions: ['What is the release schedule?'],
    answers: ['A new jSparrow version is released monthly. Each release contains at least one new rule. Every third release contains at least three rules. The releases take place on the third Thursday of the month.'],
    nextSuggestions: ['howManyRules', 'whichEditions', 'whereToGet', 'talkToHuman'],
  },
  default: {
    questions: [],
    answers: ['Sorry, I didn\'t catch that. Would you like to contact a human?'],
    nextSuggestions: ['talkToHuman', 'whatIs', 'whereToGet'],
  },
};