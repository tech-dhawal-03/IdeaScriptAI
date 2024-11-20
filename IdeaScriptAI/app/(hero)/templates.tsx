const genIdeas  = [
{
    name : 'Blog Title',
    desc : 'Create engaging and SEO-optimized blog titles in seconds with AI. Input your topic, and the tool suggests catchy, relevant titles tailored to your audience and style',
    category : 'Blog',
    icon : '/assets/blog-post.gif',
    aiPrompt : 'Give unique and eye-catchy blog title in more than 10 bullet wise-points',
    slug : 'Generate-Blog-Title',
    form : [
        {
            label : 'Enter keywords or idea ',
            field : 'input',
            name : 'niche',
            required : true
        },
       
    ]


},
{
    name: 'Blog Content',
    desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
    category: 'blog',
    icon: 'https://cdn-icons-png.flaticon.com/128/4905/4905454.png',
    slug: 'blog-content-generation',
    aiPrompt: 'Generate Blog Content based on topic and outline',
    form: [
        {
            label: 'Enter your blog topic',
            field: 'input',
            name: 'topic',
            required:true
        },
        {
            label: 'Enter blog Outline here',
            field: 'textarea',
            name: 'outline'
        }
    ]
},
{
    name: 'Ideas Generation',
    desc: 'An AI tool that serves as your personal friend, generating catchy and viral-worthy ideas in your chosen language.',
    category: 'Blog',
    icon: 'https://cdn-icons-png.flaticon.com/128/11497/11497847.png',
    slug: 'idea-generation',
    aiPrompt: 'Generate top 5 unique, eyecatching-Ideas in bullet point only, based on event provided',
    form: [
        {
            label: 'Enter about your event',
            field: 'input',
            name: 'event',
            required:true
        },
    ]
},
{
    name: 'LinkedIn Post',
    desc: 'An AI tool that serves as your professional linkedin post generator, generating catchy and unique posts for your events.',
    category: 'Youtube Tools',
    icon: '/assets/linkedin.png',
    slug: 'create-linkedin-post',
    aiPrompt: 'Generate detailed Linkedin Post with emojis including hashtags based on event in rich text editor format',
    form: [
        {
            label: 'Enter description for your event',
            field: 'input',
            name: 'keywords',
            required:true
        },
        {
            label: 'Any Specification (if needed)',
            field: 'textarea',
            name: 'outline'
        }
    ]

},
{

    name: 'Youtube Description',
    desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
    category: 'Youtube Tool',
    icon: 'https://cdn-icons-png.flaticon.com/128/2111/2111748.png',
    slug: 'youtube-description',
    aiPrompt: 'Generate Youtube description with emoji under 4-5 lines based on topic and outline.',
    form: [
        {
            label: 'Enter your blog topic/title',
            field: 'input',
            name: 'topic',
            required:true
        },
        {
            label: 'Enter youtube Outline here',
            field: 'textarea',
            name: 'outline'
        }
    ]
},
{
    name: 'Youtube Tags',
    desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
    category: 'Youtube Tool',
    icon: 'https://cdn-icons-png.flaticon.com/128/4674/4674918.png',
    slug: 'youtube-tag',

    aiPrompt: 'Generate 10 Youtube tags in bullet point based on title and outline.',

    form: [
        {
            label: 'Enter your youtube title',
            field: 'input',
            name: 'title',
            required:true
        },
        {
            label: 'Enter youtube video Outline here (Optional)',
            field: 'textarea',
            name: 'outline'
        }
    ]
},

{
    name: 'Rewrite Article (Plagiarism Free)',
    desc: 'Use this tool to rewrite existing Article or Blog Post which can bypass AI detectors and also make it plagiarism free.',
    icon: 'https://cdn-icons-png.flaticon.com/128/3131/3131607.png',
    category: 'Rewriting Tool',
    slug: 'rewrite-article',
    aiPrompt: 'Rewrite give article without any Plagiarism.',
    form: [
        {
            label: '🤖 Provide your Article/Blogpost or any other content to rewrite.',
            field: 'textarea',
            name: 'article',
            required:true
        }
    ]
},
{
    name: 'Text Improver',
    desc: 'This handy tool refines your writing, eliminating errors and redundancies for a clear, readable result. It also offers a comprehensive tone analysis and suggests better word choices.',
    icon: 'https://cdn-icons-png.flaticon.com/128/1686/1686815.png',
    category: 'Writing Assistant',
    slug: 'text-improver',
    aiPrompt: 'Given textToImprove, Rewrite text without any grammar mistake and professionally.',
    form: [
        {
            label: 'Enter text that you want to re-write or improve',
            field: 'textarea',
            name: 'textToImprove'
        }
    ]
},
{
    name: 'Add Emojis to Text',
    desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
    icon: 'https://cdn-icons-png.flaticon.com/128/2584/2584606.png',
    category: 'blog',
    slug: 'add-emoji-to-text',
    aiPrompt: 'Add Emoji to outline text depends on outline and rewrite it.',
    form: [
        {
            label: 'Enter your text to add emojis',
            field: 'textarea',
            name: 'outline',
            required:true
        }
    ]
},
{
    name: 'Instagram Post Generator',
    desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
    icon: 'https://cdn-icons-png.flaticon.com/128/15713/15713420.png',
    category: 'blog',
   
    slug: 'instagram-post-generator',
    aiPrompt: 'Generate 3 Instagram post depends on a given keywords and give output.',
    form: [
        {
            label: 'Enter Keywords for your post',
            field: 'input',
            name: 'keywords',
            required:true
        },
       
    ]
},
{
    name: 'Instagram Hash Tag Generator',
    desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
    icon: 'https://cdn-icons-png.flaticon.com/128/7045/7045432.png',
    category: 'blog',
   
    slug: 'instagram-hash-tag-generator',
    aiPrompt: 'Generate 15 Instagram hash tag depends on a given keywords and give output.',
    form: [
        {
            label: 'Enter Keywords for your instagram hastag',
            field: 'input',
            name: 'keywords',
            required:true
        },
       
    ]
},
{
    name: 'Instagram Post/Reel Idea',
    desc: 'An AI tool that generate New and trending instagram idea depends on your niche',
    icon: 'https://cdn-icons-png.flaticon.com/128/1029/1029183.png',
    category: 'instagram',
   
    slug: 'instagram-post-idea-generator',
    aiPrompt: 'Generate 5-10 Instagram idea depends on niche with latest trend and give output.',
    form: [
        {
            label: 'Enter Keywords / Niche for your instagram idea',
            field: 'input',
            name: 'keywords',
            required:true
        },
       
    ]
},
{
    name: 'English Grammer Check',
    desc: 'AI Model to Correct your english grammer by providing the text',
    icon:'https://cdn-icons-png.flaticon.com/128/12596/12596700.png',
    category: 'english',
   
    slug: 'english-grammer-checker',
    aiPrompt: 'Rewrite the inputText by correcting the grammer and give output.',
    form: [
        {
            label: 'Enter text to correct the grammer',
            field: 'input',
            name: 'inputText',
            required:true
        },
       
    ]
},
{
    name: 'Write Code',
    desc: 'AI Model to generate programming code in any language',
    icon:'https://cdn-icons-png.flaticon.com/128/6062/6062646.png',
    category: 'Coding',
   
    slug: 'write-code',
    aiPrompt: 'Depends on user codeDescription write a code and give output in  in rich text editor format in code block ',
    form: [
        {
            label: 'Enter description of code you want along with Programming Lang',
            field: 'textarea',
            name: 'codeDesscripton',
            required:true
        },
       
    ]
},
{
    name: 'Explain Code',
    desc: 'AI Model to explain programming code in any language',
    icon:'https://cdn-icons-png.flaticon.com/128/8488/8488751.png',
    category: 'Coding',
   
    slug: 'explain-code',
    aiPrompt: 'Depends on user codeDescription explain code line by line and give output in  in rich text editor format in code block ',
    form: [
        {
            label: 'Enter code which you want to understand',
            field: 'textarea',
            name: 'codeDesscripton',
            required:true
        },
       
    ]
},
{
    name: 'Code Bug Detector',
    desc: 'This tool analyzes your input, like error messages and code snippets, to pinpoint and fix bugs, offering detailed solutions and alternatives in a straightforward, user-friendly way.',
    icon:'https://cdn-icons-png.flaticon.com/128/4426/4426267.png',
    category: 'code-bug-detector',
   
    slug: 'code-bug-detector',
    aiPrompt: 'Depends on user codeInput find bug in code and give solution and give output in  in rich text editor format in code block ',
    form: [
        {
            label: 'Enter code which you want to test bug',
            field: 'textarea',
            name: 'codeInput',
            required:true
        },
       
    ]
},
{
    name: 'Tagline Generator',
    desc: 'Struggling to find the perfect tagline for your brand? Let our AI-tool assist you in creating a tagline that stands out.',
    icon:'https://cdn-icons-png.flaticon.com/128/2178/2178616.png',
    category: 'Marketting',
   
    slug: 'tagline-generator',
    aiPrompt: 'Depends on user productName and outline generate catchy 5-10 tagline for the business product and give output  in rich text editor format ',
    form: [
        {
            label: 'Product/Brand Name',
            field: 'input',
            name: 'productName',
            required:true
        },
        {
            label: 'What you are selling / Marketting',
            field: 'textarea',
            name: 'outline',
            required:true
        },
       
    ]
},
{
    name: 'Product Description',
    desc: 'This is your AI-powered SEO expert, creating captivating and keyword-rich e-commerce product descriptions to boost your online sales.',
    icon:'https://cdn-icons-png.flaticon.com/128/679/679922.png',
    category: 'Marketing',
   
    slug: 'product-description',
    aiPrompt: 'Depends on user productName and description generate small description for product for e-commer business give output  in rich text editor format  ',
    form: [
        {
            label: 'Product Name',
            field: 'input',
            name: 'productName',
            required:true
        },
        {
            label: 'Product Details',
            field: 'textarea',
            name: 'outline',
            required:true
        },
    ]
},
        {

        name: 'Generate Instagram Threads',
        desc: 'Create impactful Instagram threads with ease! Our AI-powered tool helps you craft engaging, cohesive Instagram threads in seconds—perfect for storytelling, sharing insights, or building your personal brand. Simplify your content creation and let AI take your Instagram strategy to the next level!',
        icon:'/assets/threads.png',
        category: 'instagram',
   
        slug: 'generate-instsgram-threads',
        aiPrompt: 'Depends on user idea generate instagram threads with hashtags and emojis, the content should be unique with catchy heading, give output  in rich text editor format  ',
        form: [
        {
            label: 'Idea / Event',
            field: 'input',
            name: 'idea',
            required:true
        },
        {
            label: 'Any Specification',
            field: 'textarea',
            name: 'outline',
            // required:true
        },
        ]
        }    
       
        

]

export default genIdeas;