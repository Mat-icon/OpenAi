export const Details = 
    [
        {
            id : 1,
            name : 'Q&A',
            description : 'Answer questions based on existing knowledge.',
            path: '/q&a',
            color : 'red',
            option : {
                model: "text-davinci-003",
                temperature: 0,
                max_tokens: 100,
                top_p: 1,
                frequency_penalty: 0.0,
                presence_penalty: 0.0,
                stop: ["\n"],
            }
        },
        {
            id : 2,
            name : 'Grammar correction',
            description : 'Corrects sentences into standard English.',
            path: '/grammerCorrection',
            color : 'lime'
        },
        {
            id : 3,
            name : 'Summarize for a 2nd grader',
            description : 'Translates difficult text into simpler concepts.',
            path: '/Summarize',
            color : 'purple'
        },
        {
            id : 4,
            name : 'Natural language to OpenAI API',
            description : 'Create code to call to the OpenAI API .',
            path: '/naturalLanguage',
            color : 'skyblue'
        },
        {
            id : 5,
            name : 'Essay outline',
            description : 'Generate an outline for a research topic.',
            path: '/essayOutline',
            color : 'pink'
        },
        {
            id : 6,
            name : 'Image Generator',
            description : 'Generate an Image using only Text',
            path: '/image',
            color : 'yellow'
        }

    ]

   
