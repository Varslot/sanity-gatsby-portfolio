export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f6128a0981a0138bb9817d4',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-x9nwthhk',
                  apiId: '9fa0fe09-067f-49a8-ade3-d551ea400211'
                },
                {
                  buildHookId: '5f6128a06ea1b5415f187217',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-wnon8nvj',
                  apiId: 'd815a8bf-f710-404a-8d6c-ddb2fb4e6fd1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Varslot/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-wnon8nvj.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
