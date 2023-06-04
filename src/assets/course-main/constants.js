const courses = [
    {
        title: 'Intro to HTML and CSS',
        description: 'Learn how to convert digital design mockups into static web pages and how to build a responsive portfolio site to showcase your work.',
        image: 'https://s3.amazonaws.com/codecademy-content/courses/freelance-1/unit-1/lesson-1/html-css-1.jpg',
        link: 'https://www.codecademy.com/learn/learn-html-css',
        id: 1
    },
    {
        title: 'Responsive Design',
        description: 'Learn how to make your websites look great on all devices.',
        image: 'https://s3.amazonaws.com/codecademy-content/courses/freelance-1/unit-1/lesson-2/responsive-design-1.jpg',
        link: 'https://www.codecademy.com/learn/learn-responsive-design',
        id: 2
    },
    {
        title: 'JavaScript Basics',
        description: 'Learn the fundamentals of JavaScript, the programming language of the Web.',
        image: 'https://s3.amazonaws.com/codecademy-content/courses/freelance-1/unit-1/lesson-3/javascript-1.jpg',
        link: 'https://www.codecademy.com/learn/learn-javascript',
        id: 3
    },
    {
        title: 'JavaScript Loops, Arrays and Objects',
        description: 'Learn how to manipulate arrays to store and organize data and use comparison operators to make your programs behave different based on user input.',
        image: 'https://s3.amazonaws.com/codecademy-content/courses/freelance-1/unit-1/lesson-4/javascript-2.jpg',
        link: 'https://www.codecademy.com/learn/learn-javascript',
        id: 4
    },
    {
        title: 'jQuery',
        description: 'Learn how to use jQuery to add interactivity to your websites.',
        image: 'https://s3.amazonaws.com/codecademy-content/courses/freelance-1/unit-1/lesson-5/jquery-1.jpg',
        link: 'https://www.codecademy.com/learn/learn-jquery',
        id: 5
    },
    {
        title: 'How to Make a Website',
        description: 'Learn how to build a website using HTML and CSS.',
        image: 'https://s3.amazonaws.com/codecademy-content/courses/freelance-1/unit-1/lesson-6/html-css-2.jpg',
        link: 'https://www.codecademy.com/learn/make-a-website',
        id: 6
    },
    {
        title: 'How to Deploy a Website',
        description: 'Learn how to deploy your website to the Internet!',
        image: 'https://s3.amazonaws.com/codecademy-content/courses/freelance-1/unit-1/lesson-7/deploy-1.jpg',
        link: 'https://www.codecademy.com/learn/deploy-a-website',
        id: 7
    },
    {
        title: 'How to Use Git and GitHub',
        description: 'Learn how to use Git and GitHub to track changes to your code and collaborate with other developers.',
        image: 'https://s3.amazonaws.com/codecademy-content/courses/freelance-1/unit-1/lesson-8/git-1.jpg',
        link: 'https://www.codecademy.com/learn/learn-git',
        id: 8
    },
    {
        title: 'Command Line Basics',
        description: 'Learn how to use the command line to manipulate files and directories on your computer.',
        image: 'https://s3.amazonaws.com/codecademy-content/courses/freelance-1/unit-1/lesson-9/command-line-1.jpg',
        link: 'https://www.codecademy.com/learn/learn-the-command-line',
        id: 9
    },
    {
        title: 'Build Your Own Webpage',
        description: 'Learn how to build your own webpage using HTML and CSS.',
        image: 'https://s3.amazonaws.com/codecademy-content/courses/freelance-1/unit-1/lesson-10/html-css-3.jpg',
        link: 'https://www.codecademy.com/learn/build-interactive-websites',
        id: 10
    },
    {
        title: 'HTML Forms',
        description: 'Learn how to create forms to collect data from your users.',
        image: 'https://s3.amazonaws.com/codecademy-content/courses/freelance-1/unit-1/lesson-11/html-forms-1.jpg',
        link: 'https://www.codecademy.com/learn/learn-html-forms',
        id: 11
    },
    {
        title: 'Web Accessibility',
        description: 'Learn how to make your websites accessible to everyone.',
        image: 'https://s3.amazonaws.com/codecademy-content/courses/freelance-1/unit-1/lesson-12/accessibility-1.jpg',
        link: 'https://www.codecademy.com/learn/learn-accessibility',
        id: 12
    },
    {
        title: 'Responsive Images', 
        description: 'Learn how to make your images look great on all devices.',
        image: 'https://s3.amazonaws.com/codecademy-content/courses/freelance-1/unit-1/lesson-13/responsive-images-1.jpg',
        link: 'https://www.codecademy.com/learn/learn-responsive-images',
        id: 13
    },
    {
        title: 'JavaScript Functions',
        description: 'Learn how to write functions to make your code reusable and easier to read.',
        image: 'https://s3.amazonaws.com/codecademy-content/courses/freelance-1/unit-1/lesson-14/javascript-3.jpg',
        link: 'https://www.codecademy.com/learn/introduction-to-javascript',
        id: 14
    },
    {
        title: 'JavaScript and the DOM',
        description: 'Learn how to use JavaScript to make your websites interactive and dynamic.',
        image: 'https://s3.amazonaws.com/codecademy-content/courses/freelance-1/unit-1/lesson-15/javascript-4.jpg',
        link: 'https://www.codecademy.com/learn/javascript-dom',
        id: 15
    },
    {
        title: 'Object-Oriented JavaScript',
        description: 'Learn how to use object-oriented programming techniques in JavaScript.',
        image: 'https://s3.amazonaws.com/codecademy-content/courses/freelance-1/unit-1/lesson-16/javascript-5.jpg',
        link: 'https://www.codecademy.com/learn/introduction-to-javascript',
        id: 16
    },
    {
        title: 'HTML5 Canvas',
        description: 'Learn how to use the HTML5 canvas element to create, animate, and interact with graphics.',
        image: 'https://s3.amazonaws.com/codecademy-content/courses/freelance-1/unit-1/lesson-17/canvas-1.jpg',
        link: 'https://www.codecademy.com/learn/html5-canvas',
        id: 17
    },
    {
        title: 'Offline Web Applications',
        description: 'Learn how to make your web applications work even when there is no Internet connection.',
        image: 'https://s3.amazonaws.com/codecademy-content/courses/freelance-1/unit-1/lesson-18/offline-web-apps-1.jpg',
        link: 'https://www.codecademy.com/learn/offline-web-applications',
        id: 18
    },
    {
        title: 'HTTP and AJAX',
        description: 'Learn how to use AJAX to send data to your web applications and retrieve data from APIs.',
        image: 'https://s3.amazonaws.com/codecademy-content/courses/freelance-1/unit-1/lesson-19/ajax-1.jpg',
        link: 'https://www.codecademy.com/learn/learn-javascript',
        id: 19
    },
    {
        title: 'JavaScript Design Patterns',
        description: 'Learn how to use design patterns to organize your JavaScript code.',
        image: 'https://s3.amazonaws.com/codecademy-content/courses/freelance-1/unit-1/lesson-20/javascript-6.jpg',
        link: 'https://www.codecademy.com/learn/introduction-to-javascript',
        id: 20
    },
    {
        title: 'JavaScript Testing',
        description: 'Learn how to use automated testing to make sure your code is working as expected.',
        image: 'https://s3.amazonaws.com/codecademy-content/courses/freelance-1/unit-1/lesson-21/testing-1.jpg',
        link: 'https://www.codecademy.com/learn/learn-javascript-unit-testing',
        id: 21
    },
    {
        title: 'Intro to Relational Databases',
        description: 'Learn how to use SQL to store, query, and manipulate data in relational databases.',
        image: 'https://s3.amazonaws.com/codecademy-content/courses/freelance-1/unit-1/lesson-22/sql-1.jpg',
        link: 'https://www.codecademy.com/learn/learn-sql',
        id: 22
    },
    {
        title: 'Web Tooling and Automation',
        description: 'Learn how to use tools to automate your development workflow.',
        image: 'https://s3.amazonaws.com/codecademy-content/courses/freelance-1/unit-1/lesson-24/web-tooling-1.jpg',
        link: 'https://www.codecademy.com/learn/web-tooling-and-automation',
        id: 23
    },
]

export default courses;