# i18n-demo
customizing default angular app to demo i18n using ngx-translate library

## summary
- languages: English, Hindi, Arabic, Korean, Spanish, French
- locales: United States, India, Saudi Arabia, South Korea, Mexico, France
- can switch between languages via buttons
- localized text, currency, numeric values, svg's title (metric values could also be localized)
- example in terminal refers to average cost of a 1.5 l or 50 oz water bottle in different locales

## english
<img width="1440" alt="image" src="https://user-images.githubusercontent.com/39142854/234933752-75a2247b-84c9-4ef2-99bb-cbad323d0c87.png">

## hindi
<img width="1440" alt="image" src="https://user-images.githubusercontent.com/39142854/234934888-a1ce20aa-0166-44ee-b492-ebeb0ceb9dae.png">

## arabic
<img width="1440" alt="image" src="https://user-images.githubusercontent.com/39142854/234935065-57503588-0b14-48e9-958b-7fb3e3e29715.png">

## korean
<img width="1437" alt="image" src="https://user-images.githubusercontent.com/39142854/234935438-9301a57f-1ccb-40fd-9af1-65a9eafd100d.png">

## spanish
<img width="1440" alt="image" src="https://user-images.githubusercontent.com/39142854/234935573-04281b4d-f537-4b33-9806-a16cc2bc9992.png">

## french
<img width="1439" alt="image" src="https://user-images.githubusercontent.com/39142854/234935772-e2bea220-4830-46d2-b550-072eab657e7e.png">

## what's new
improvements from [previous demo](https://github.com/tanya-sonker/angular-app)
- went beyond localizing just text
- used nested json objects
- worked with bidirectional text

## terms
- **pipe**: simple function which accepts an input value and returns a transformed value
- **aot**: ahead-of-time compilation. angular is comprised of components and html templates which cannot be understood by browsers. so aot compiler converts angular html and typescript code to javascript code so it can be understood by browsers. this is done during the build phase, before the browser downloads and runs code which allows for faster rendering. by default angular versions 9+ use aot (set to true)
- **factory**: simple function that adds some logic to allocated object and returns an object
- **title**: tag associated with svg component is an accessible, short-term description which displays as a tooltip

## notes
- angular has built-in i18n functionality unlike react & vue but only supports xml formats (xliff, xmb). though more performant, needs app to reload for every translation
- one of the simplest ways to load translation files is from assets via translatehttploader. by default, there is no loader so http-loader is imported and customized
- img's alt text attribute and svg component's title tag can be translated too

## deployment
- in angular.json, change outPath to docs:
`"outputPath": "docs"`
- in terminal, build your project in prod:
`ng build --output-path docs --base-href i18n-demo`
- in github pages settings, connect the main branch to the docs folder 