const patternDict = [{
    pattern: '\\b(Hi|Hello|Hey)\\b',
    intent: 'Hello, how are you ?'
    },{
    pattern: '\\b(bye|exit)\\b',
    intent: 'Exit'
    },/*{
    pattern: '\\b(weather)\\b',
    intent: 'The weather is'
    },*/{
    pattern: '\\b(Fine and you?|Good and you?)\\b',
    intent: 'I am in a wonderful shape today thanks, what can i do for you ?'
    },/*{he
    pattern: '\\b(?<city>Paris|London|New York|Guingamp|New Delhi|Lyon)\\b',
    intent: 'Current Weather'
    },*/{
    pattern: '.*weather in (?<city>[\\w|\\s]+)',
    intent: 'Current Weather'
    },{
    pattern: '\\bweather\\sin\\s(?<city>[A-Za-z]+[a-zA-Z]+?)\\s(?<time>tomorrow|today)',
    intent: 'get weather'
}];

module.exports = patternDict;