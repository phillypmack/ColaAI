tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#4b2bee",
            },
        },
    },
}

const languagesData = {
    "🔥 Top 20": [
        { name: "Python", devicon: "python", color: "#3776ab" },
        { name: "JavaScript", devicon: "javascript", color: "#f7df1e" },
        { name: "Java", devicon: "java", color: "#007396" },
        { name: "TypeScript", devicon: "typescript", color: "#3178c6" },
        { name: "C++", devicon: "cplusplus", color: "#00599c" },
        { name: "C#", devicon: "csharp", color: "#239120" },
        { name: "PHP", devicon: "php", color: "#777bb4" },
        { name: "C", devicon: "c", color: "#a8b9cc" },
        { name: "Ruby", devicon: "ruby", color: "#cc342d" },
        { name: "Go", devicon: "go", color: "#00add8" },
        { name: "Swift", devicon: "swift", color: "#fa7343" },
        { name: "Kotlin", devicon: "kotlin", color: "#7f52ff" },
        { name: "Rust", devicon: "rust", color: "#ce422b" },
        { name: "Scala", devicon: "scala", color: "#dc322f" },
        { name: "R", devicon: "r", color: "#276dc3" },
        { name: "Dart", devicon: "dart", color: "#0175c2" },
        { name: "Perl", devicon: "perl", color: "#39457e" },
        { name: "Lua", devicon: "lua", color: "#000080" },
        { name: "Groovy", devicon: "groovy", color: "#4298b8" },
        { name: "Julia", devicon: "julia", color: "#9558b2" }
    ],
    "🌐 Web": [
        { name: "HTML5", devicon: "html5", color: "#e34f26" },
        { name: "CSS3", devicon: "css3", color: "#1572b6" },
        { name: "Sass", devicon: "sass", color: "#cc6699" },
        { name: "Less", devicon: "less", color: "#1d365d" },
        { name: "Bootstrap", devicon: "bootstrap", color: "#7952b3" },
        { name: "Tailwind CSS", devicon: "tailwindcss", color: "#06b6d4" },
        { name: "React", devicon: "react", color: "#61dafb" },
        { name: "Vue.js", devicon: "vuejs", color: "#4fc08d" },
        { name: "Angular", devicon: "angularjs", color: "#dd0031" },
        { name: "Svelte", devicon: "svelte", color: "#ff3e00" },
        { name: "jQuery", devicon: "jquery", color: "#0769ad" },
        { name: "Webpack", devicon: "webpack", color: "#8dd6f9" },
        { name: "Babel", devicon: "babel", color: "#f9dc3e" },
        { name: "Vite", devicon: "vitejs", color: "#646cff" },
        { name: "Gatsby", devicon: "gatsby", color: "#663399" }
    ],
    "⚙️ Backend": [
        { name: "Node.js", devicon: "nodejs", color: "#339933" },
        { name: "Express", devicon: "express", color: "#000000" },
        { name: "Next.js", devicon: "nextjs", color: "#000000" },
        { name: "Nuxt.js", devicon: "nuxtjs", color: "#00c58e" },
        { name: "NestJS", devicon: "nestjs", color: "#e0234e" },
        { name: "Django", devicon: "django", color: "#092e20" },
        { name: "Flask", devicon: "flask", color: "#000000" },
        { name: "Spring", devicon: "spring", color: "#6db33f" },
        { name: ".NET", devicon: "dot-net", color: "#512bd4" },
        { name: "Laravel", devicon: "laravel", color: "#ff2d20" },
        { name: "Symfony", devicon: "symfony", color: "#000000" },
        { name: "Rails", devicon: "rails", color: "#cc0000" },
        { name: "Phoenix", devicon: "phoenix", color: "#fd4f00" },
        { name: "GraphQL", devicon: "graphql", color: "#e10098" },
        { name: "Apollo", devicon: "apollographql", color: "#311c87" }
    ],
    "💾 Databases": [
        { name: "MySQL", devicon: "mysql", color: "#4479a1" },
        { name: "PostgreSQL", devicon: "postgresql", color: "#336791" },
        { name: "SQLite", devicon: "sqlite", color: "#003b57" },
        { name: "Microsoft SQL", devicon: "microsoftsqlserver", color: "#cc2927" },
        { name: "Oracle", devicon: "oracle", color: "#f80000" },
        { name: "MongoDB", devicon: "mongodb", color: "#47a248" },
        { name: "Redis", devicon: "redis", color: "#dc382d" },
        { name: "Firebase", devicon: "firebase", color: "#ffca28" },
        { name: "Supabase", devicon: "supabase", color: "#3ecf8e" },
        { name: "Cassandra", devicon: "cassandra", color: "#1287b1" },
        { name: "CouchDB", devicon: "couchdb", color: "#e42528" },
        { name: "Neo4j", devicon: "neo4j", color: "#008cc1" }
    ],
    "☁️ DevOps": [
        { name: "Docker", devicon: "docker", color: "#2496ed" },
        { name: "Kubernetes", devicon: "kubernetes", color: "#326ce5" },
        { name: "AWS", devicon: "amazonwebservices", color: "#232f3e" },
        { name: "Google Cloud", devicon: "googlecloud", color: "#4285f4" },
        { name: "Azure", devicon: "azure", color: "#0089d6" },
        { name: "Heroku", devicon: "heroku", color: "#430098" },
        { name: "Vercel", devicon: "vercel", color: "#000000" },
        { name: "Netlify", devicon: "netlify", color: "#00c7b7" },
        { name: "DigitalOcean", devicon: "digitalocean", color: "#0080ff" },
        { name: "Terraform", devicon: "terraform", color: "#7b42bc" },
        { name: "Ansible", devicon: "ansible", color: "#ee0000" },
        { name: "Jenkins", devicon: "jenkins", color: "#d24939" },
        { name: "Git", devicon: "git", color: "#f05032" },
        { name: "GitHub", devicon: "github", color: "#181717" },
        { name: "GitLab", devicon: "gitlab", color: "#fca121" },
        { name: "Nginx", devicon: "nginx", color: "#009639" },
        { name: "Apache", devicon: "apache", color: "#d22128" }
    ],
    "🐧 Linux": [
        { name: "Linux", devicon: "linux", color: "#fcc624" },
        { name: "Ubuntu", devicon: "ubuntu", color: "#e95420" },
        { name: "Debian", devicon: "debian", color: "#a80030" },
        { name: "Fedora", devicon: "fedora", color: "#51a2da" },
        { name: "Arch Linux", devicon: "archlinux", color: "#1793d1" },
        { name: "CentOS", devicon: "centos", color: "#212429" },
        { name: "Kali Linux", devicon: "kalilinux", color: "#557c94" },
        { name: "Manjaro", devicon: "manjaro", color: "#35bf5c" },
        { name: "Raspberry Pi", devicon: "raspberrypi", color: "#c51a4a" },
        { name: "Red Hat", devicon: "redhat", color: "#ee0000" }
    ],
    "🛠️ Ferramentas": [
        { name: "VS Code", devicon: "vscode", color: "#007acc" },
        { name: "Vim", devicon: "vim", color: "#019733" },
        { name: "NPM", devicon: "npm", color: "#cb3837" },
        { name: "Yarn", devicon: "yarn", color: "#2c8ebb" },
        { name: "ESLint", devicon: "eslint", color: "#4b32c3" },
        { name: "Jest", devicon: "jest", color: "#c21325" },
        { name: "Figma", devicon: "figma", color: "#f24e1e" },
        { name: "Postman", devicon: "postman", color: "#ff6c37" },
        { name: "Jira", devicon: "jira", color: "#0052cc" },
        { name: "Trello", devicon: "trello", color: "#0079bf" }
    ],
    "📱 Mobile": [
        { name: "Android", devicon: "android", color: "#3ddc84" },
        { name: "Flutter", devicon: "flutter", color: "#02569b" },
        { name: "React Native", devicon: "react", color: "#61dafb" },
        { name: "Electron", devicon: "electron", color: "#47848f" },
        { name: "Apple", devicon: "apple", color: "#000000" }
    ],
    "🧠 IA & Data": [
        { name: "TensorFlow", devicon: "tensorflow", color: "#ff6f00" },
        { name: "PyTorch", devicon: "pytorch", color: "#ee4c2c" },
        { name: "Pandas", devicon: "pandas", color: "#150458" },
        { name: "NumPy", devicon: "numpy", color: "#013243" },
        { name: "Jupyter", devicon: "jupyter", color: "#f37626" },
        { name: "Keras", devicon: "keras", color: "#d00000" },
        { name: "OpenAI", devicon: "chatgpt", color: "#74aa9c" },
        { name: "Anaconda", devicon: "anaconda", color: "#44a833" }
    ],
    "💻 Mais Linguagens": [
        { name: "Haskell", devicon: "haskell", color: "#5d4f85" },
        { name: "Elixir", devicon: "elixir", color: "#4e2a8e" },
        { name: "Erlang", devicon: "erlang", color: "#a90533" },
        { name: "Clojure", devicon: "clojure", color: "#5881d8" },
        { name: "F#", devicon: "fsharp", color: "#378bba" },
        { name: "OCaml", devicon: "ocaml", color: "#ee6a1a" },
        { name: "Objective-C", devicon: "objectivec", color: "#438eff" },
        { name: "Zig", devicon: "zig", color: "#f7a41d" },
        { name: "D", devicon: "d", color: "#b03931" },
        { name: "Crystal", devicon: "crystal", color: "#000000" },
        { name: "Nim", devicon: "nim", color: "#ffe953" },
        { name: "V", devicon: "vlang", color: "#5d87bf" }
    ],
    "🎨 Design & Prototipação": [
        { name: "Adobe XD", devicon: "xd", color: "#ff61f6" },
        { name: "Sketch", devicon: "sketch", color: "#f7b500" },
        { name: "Photoshop", devicon: "photoshop", color: "#31a8ff" },
        { name: "Illustrator", devicon: "illustrator", color: "#ff9a00" },
        { name: "InVision", devicon: "invision", color: "#ff3366" },
        { name: "Canva", devicon: "canva", color: "#00c4cc" },
        { name: "Blender", devicon: "blender", color: "#f5792a" },
        { name: "Unity", devicon: "unity", color: "#000000" },
        { name: "Unreal Engine", devicon: "unrealengine", color: "#313131" }
    ],
    "🔧 Testes & Qualidade": [
        { name: "Selenium", devicon: "selenium", color: "#43b02a" },
        { name: "Cypress", devicon: "cypressio", color: "#17202c" },
        { name: "Mocha", devicon: "mocha", color: "#8d6748" },
        { name: "Jasmine", devicon: "jasmine", color: "#8a4182" },
        { name: "Pytest", devicon: "pytest", color: "#0a9edc" },
        { name: "JUnit", devicon: "junit", color: "#25a162" },
        { name: "Cucumber", devicon: "cucumber", color: "#23d96c" },
        { name: "Playwright", devicon: "playwright", color: "#2ead33" }
    ],
    "📦 Package Managers": [
        { name: "Composer", devicon: "composer", color: "#885630" },
        { name: "Maven", devicon: "maven", color: "#c71a36" },
        { name: "Gradle", devicon: "gradle", color: "#02303a" },
        { name: "NuGet", devicon: "nuget", color: "#004880" },
        { name: "Pip", devicon: "python", color: "#3776ab" },
        { name: "Cargo", devicon: "cargo", color: "#000000" },
        { name: "pnpm", devicon: "pnpm", color: "#f69220" }
    ],
    "🌟 Frameworks Web": [
        { name: "Ember.js", devicon: "emberjs", color: "#e04e39" },
        { name: "Backbone.js", devicon: "backbonejs", color: "#0071b5" },
        { name: "Alpine.js", devicon: "alpinejs", color: "#8bc0d0" },
        { name: "Astro", devicon: "astro", color: "#ff5d01" },
        { name: "Solid", devicon: "solidjs", color: "#2c4f7c" },
        { name: "Qwik", devicon: "qwik", color: "#ac7ef4" },
        { name: "Remix", devicon: "remix", color: "#000000" },
        { name: "Meteor", devicon: "meteor", color: "#de4f4f" },
        { name: "Aurelia", devicon: "aurelia", color: "#ed2b88" },
        { name: "Preact", devicon: "preact", color: "#673ab8" }
    ],
    "🔐 Segurança & Auth": [
        { name: "OAuth", devicon: "oauth", color: "#3c3c3c" },
        { name: "Auth0", devicon: "auth0", color: "#eb5424" },
        { name: "Keycloak", devicon: "keycloak", color: "#4d4d4d" },
        { name: "Okta", devicon: "okta", color: "#0078d1" }
    ],
    "📡 APIs & Messaging": [
        { name: "REST API", devicon: "fastapi", color: "#009688" },
        { name: "gRPC", devicon: "grpc", color: "#244c5a" },
        { name: "RabbitMQ", devicon: "rabbitmq", color: "#ff6600" },
        { name: "Kafka", devicon: "apachekafka", color: "#231f20" },
        { name: "Socket.io", devicon: "socketio", color: "#010101" },
        { name: "Swagger", devicon: "swagger", color: "#85ea2d" }
    ],
    "🎮 Game Dev": [
        { name: "Godot", devicon: "godot", color: "#478cbf" },
        { name: "GameMaker", devicon: "gamemaker", color: "#8bc34a" },
        { name: "Phaser", devicon: "phaserjs", color: "#6e41cc" },
        { name: "Three.js", devicon: "threejs", color: "#000000" }
    ],
    "🗄️ Mais Databases": [
        { name: "MariaDB", devicon: "mariadb", color: "#003545" },
        { name: "DynamoDB", devicon: "dynamodb", color: "#4053d6" },
        { name: "Elasticsearch", devicon: "elasticsearch", color: "#005571" },
        { name: "InfluxDB", devicon: "influxdb", color: "#22adf6" },
        { name: "CockroachDB", devicon: "cockroachdb", color: "#6933ff" },
        { name: "PlanetScale", devicon: "planetscale", color: "#000000" }
    ],
    "🔨 Build Tools": [
        { name: "Gulp", devicon: "gulp", color: "#cf4647" },
        { name: "Grunt", devicon: "grunt", color: "#fba919" },
        { name: "Rollup", devicon: "rollup", color: "#ec4a3f" },
        { name: "Parcel", devicon: "parcel", color: "#21374b" },
        { name: "Turbo", devicon: "turborepo", color: "#ef4444" },
        { name: "SWC", devicon: "swc", color: "#ffa500" }
    ],
    "☁️ Mais Cloud": [
        { name: "Cloudflare", devicon: "cloudflare", color: "#f38020" },
        { name: "Railway", devicon: "railway", color: "#0b0d0e" },
        { name: "Render", devicon: "render", color: "#46e3b7" },
        { name: "Fly.io", devicon: "fly", color: "#7b3ff2" },
        { name: "Linode", devicon: "linode", color: "#00a95c" },
        { name: "Vultr", devicon: "vultr", color: "#007bfc" }
    ],
    "🐳 Container & Orchestration": [
        { name: "Podman", devicon: "podman", color: "#892ca0" },
        { name: "Rancher", devicon: "rancher", color: "#0075a8" },
        { name: "Nomad", devicon: "nomad", color: "#00ca8e" },
        { name: "Helm", devicon: "helm", color: "#0f1689" },
        { name: "Vagrant", devicon: "vagrant", color: "#1563ff" }
    ],
    "📊 Monitoring & Analytics": [
        { name: "Grafana", devicon: "grafana", color: "#f46800" },
        { name: "Prometheus", devicon: "prometheus", color: "#e6522c" },
        { name: "Sentry", devicon: "sentry", color: "#362d59" },
        { name: "DataDog", devicon: "datadog", color: "#632ca6" },
        { name: "New Relic", devicon: "newrelic", color: "#008c99" }
    ],
    "🖥️ Editores & IDEs": [
        { name: "IntelliJ", devicon: "intellij", color: "#000000" },
        { name: "PyCharm", devicon: "pycharm", color: "#21d789" },
        { name: "WebStorm", devicon: "webstorm", color: "#00cdd7" },
        { name: "Atom", devicon: "atom", color: "#66595c" },
        { name: "Sublime Text", devicon: "sublimetext", color: "#ff9800" },
        { name: "Emacs", devicon: "emacs", color: "#7f5ab6" },
        { name: "Nano", devicon: "nano", color: "#4a90e2" },
        { name: "Notepad++", devicon: "notepadplusplus", color: "#90e59a" }
    ],
    "🎯 CMS & E-commerce": [
        { name: "WordPress", devicon: "wordpress", color: "#21759b" },
        { name: "Drupal", devicon: "drupal", color: "#0678be" },
        { name: "Joomla", devicon: "joomla", color: "#5091cd" },
        { name: "Magento", devicon: "magento", color: "#ee672f" },
        { name: "WooCommerce", devicon: "woocommerce", color: "#96588a" },
        { name: "Shopify", devicon: "shopify", color: "#7ab55c" },
        { name: "Strapi", devicon: "strapi", color: "#2f2e8b" },
        { name: "Contentful", devicon: "contentful", color: "#2478cc" }
    ],
    "🎓 Educação & Docs": [
        { name: "Markdown", devicon: "markdown", color: "#000000" },
        { name: "LaTeX", devicon: "latex", color: "#008080" },
        { name: "Read the Docs", devicon: "readthedocs", color: "#8ca1af" },
        { name: "Confluence", devicon: "confluence", color: "#172b4d" },
        { name: "Notion", devicon: "notion", color: "#000000" }
    ],
    "⚡ Performance": [
        { name: "Lighthouse", devicon: "lighthouse", color: "#f44b21" },
        { name: "WebPageTest", devicon: "webpagetest", color: "#005a9c" },
        { name: "PageSpeed", devicon: "pagespeed", color: "#4285f4" }
    ],
    "🔄 CI/CD": [
        { name: "CircleCI", devicon: "circleci", color: "#343434" },
        { name: "Travis CI", devicon: "travis", color: "#3eaaaf" },
        { name: "GitHub Actions", devicon: "githubactions", color: "#2088ff" },
        { name: "GitLab CI", devicon: "gitlab", color: "#fc6d26" },
        { name: "Bamboo", devicon: "bamboo", color: "#0052cc" },
        { name: "TeamCity", devicon: "teamcity", color: "#000000" },
        { name: "Drone", devicon: "drone", color: "#212121" },
        { name: "ArgoCD", devicon: "argocd", color: "#ef7b4d" }
    ],
    "🌍 Internacionalização": [
        { name: "i18next", devicon: "i18next", color: "#26a69a" },
        { name: "FormatJS", devicon: "formatjs", color: "#dd4a68" },
        { name: "Crowdin", devicon: "crowdin", color: "#2e3340" }
    ],
    "📱 Mais Mobile": [
        { name: "Ionic", devicon: "ionic", color: "#3880ff" },
        { name: "Capacitor", devicon: "capacitor", color: "#119eff" },
        { name: "Cordova", devicon: "apache-cordova", color: "#e8e8e8" },
        { name: "Xamarin", devicon: "xamarin", color: "#3498db" },
        { name: "NativeScript", devicon: "nativescript", color: "#3655ff" },
        { name: "Expo", devicon: "expo", color: "#000020" }
    ],
    "🎬 Media & Streaming": [
        { name: "FFmpeg", devicon: "ffmpeg", color: "#007808" },
        { name: "GStreamer", devicon: "gstreamer", color: "#f3b300" },
        { name: "OBS Studio", devicon: "obs", color: "#302e31" },
        { name: "WebRTC", devicon: "webrtc", color: "#333333" }
    ],
    "🔍 Search & Analytics": [
        { name: "Algolia", devicon: "algolia", color: "#5468ff" },
        { name: "MeiliSearch", devicon: "meilisearch", color: "#ff5caa" },
        { name: "Solr", devicon: "solr", color: "#d9411e" },
        { name: "Splunk", devicon: "splunk", color: "#000000" },
        { name: "Kibana", devicon: "kibana", color: "#005571" }
    ],
    "🎯 State Management": [
        { name: "Redux", devicon: "redux", color: "#764abc" },
        { name: "MobX", devicon: "mobx", color: "#ff9955" },
        { name: "Zustand", devicon: "zustand", color: "#443e38" },
        { name: "Recoil", devicon: "recoil", color: "#3578e5" },
        { name: "Jotai", devicon: "jotai", color: "#000000" },
        { name: "XState", devicon: "xstate", color: "#2c3e50" }
    ],
    "🖼️ UI Libraries": [
        { name: "Material-UI", devicon: "materialui", color: "#007fff" },
        { name: "Ant Design", devicon: "antdesign", color: "#0170fe" },
        { name: "Chakra UI", devicon: "chakraui", color: "#319795" },
        { name: "Mantine", devicon: "mantine", color: "#339af0" },
        { name: "Bulma", devicon: "bulma", color: "#00d1b2" },
        { name: "Foundation", devicon: "foundation", color: "#0093d0" },
        { name: "Semantic UI", devicon: "semanticui", color: "#35bdb2" }
    ],
    "🧪 Linting & Formatting": [
        { name: "Prettier", devicon: "prettier", color: "#f7b93e" },
        { name: "TSLint", devicon: "tslint", color: "#000000" },
        { name: "Stylelint", devicon: "stylelint", color: "#263238" },
        { name: "Pylint", devicon: "python", color: "#3776ab" },
        { name: "RuboCop", devicon: "ruby", color: "#cc342d" }
    ],
    "🔌 Backend Frameworks": [
        { name: "FastAPI", devicon: "fastapi", color: "#009688" },
        { name: "Fiber", devicon: "go", color: "#00add8" },
        { name: "Gin", devicon: "go", color: "#00add8" },
        { name: "Actix", devicon: "rust", color: "#ce422b" },
        { name: "Rocket", devicon: "rust", color: "#ce422b" },
        { name: "Adonis.js", devicon: "adonisjs", color: "#5a45ff" },
        { name: "Hono", devicon: "hono", color: "#ff6600" },
        { name: "Koa", devicon: "koajs", color: "#33333d" }
    ],
    "🗺️ Mapas & Geolocalização": [
        { name: "Leaflet", devicon: "leaflet", color: "#199900" },
        { name: "Mapbox", devicon: "mapbox", color: "#000000" },
        { name: "OpenStreetMap", devicon: "openstreetmap", color: "#7ebc6f" },
        { name: "Google Maps", devicon: "google", color: "#4285f4" }
    ],
    "💳 Pagamentos": [
        { name: "Stripe", devicon: "stripe", color: "#008cdd" },
        { name: "PayPal", devicon: "paypal", color: "#00457c" },
        { name: "Square", devicon: "square", color: "#3e4348" }
    ],
    "🔗 Blockchain & Web3": [
        { name: "Solidity", devicon: "solidity", color: "#363636" },
        { name: "Ethereum", devicon: "ethereum", color: "#3c3c3d" },
        { name: "Web3.js", devicon: "web3js", color: "#f16822" },
        { name: "Hardhat", devicon: "hardhat", color: "#fff100" },
        { name: "Truffle", devicon: "truffle", color: "#5e464d" }
    ],
    "📧 Email & Comunicação": [
        { name: "SendGrid", devicon: "sendgrid", color: "#1a82e2" },
        { name: "Mailchimp", devicon: "mailchimp", color: "#ffe01b" },
        { name: "Twilio", devicon: "twilio", color: "#f22f46" },
        { name: "Slack", devicon: "slack", color: "#4a154b" },
        { name: "Discord", devicon: "discord", color: "#5865f2" }
    ],
    "🎨 CSS Frameworks": [
        { name: "PostCSS", devicon: "postcss", color: "#dd3a0a" },
        { name: "Stylus", devicon: "stylus", color: "#ff6347" },
        { name: "Emotion", devicon: "emotion", color: "#d36ac2" },
        { name: "Styled Components", devicon: "styledcomponents", color: "#db7093" }
    ],
    "🖥️ Desktop": [
        { name: "Tauri", devicon: "tauri", color: "#ffc131" },
        { name: "Qt", devicon: "qt", color: "#41cd52" },
        { name: "GTK", devicon: "gtk", color: "#7fe719" },
        { name: "Electron Builder", devicon: "electron", color: "#47848f" },
        { name: ".NET MAUI", devicon: "dotnetcore", color: "#512bd4" }
    ],
    "🌐 Navegadores": [
        { name: "Chrome", devicon: "chrome", color: "#4285f4" },
        { name: "Firefox", devicon: "firefox", color: "#ff7139" },
        { name: "Safari", devicon: "safari", color: "#000000" },
        { name: "Edge", devicon: "edge", color: "#0078d7" },
        { name: "Opera", devicon: "opera", color: "#ff1b2d" },
        { name: "Brave", devicon: "brave", color: "#fb542b" }
    ],
    "🔧 Utilitários": [
        { name: "Lodash", devicon: "lodash", color: "#3492ff" },
        { name: "Moment.js", devicon: "momentjs", color: "#000000" },
        { name: "Day.js", devicon: "dayjs", color: "#ff5f4c" },
        { name: "Axios", devicon: "axios", color: "#5a29e4" },
        { name: "RxJS", devicon: "rxjs", color: "#b7178c" }
    ],
    "🎮 Game Engines": [
        { name: "Cocos2d", devicon: "cocos2d", color: "#55c2e1" },
        { name: "Love2D", devicon: "love2d", color: "#ea316e" },
        { name: "MonoGame", devicon: "monogame", color: "#e73c00" }
    ],
    "📊 Data Visualization": [
        { name: "D3.js", devicon: "d3js", color: "#f9a03c" },
        { name: "Chart.js", devicon: "chartjs", color: "#ff6384" },
        { name: "Plotly", devicon: "plotly", color: "#3f4f75" },
        { name: "Apache ECharts", devicon: "apacheecharts", color: "#aa344d" },
        { name: "Highcharts", devicon: "highcharts", color: "#8087e8" }
    ],
    "🔐 Criptografia & SSL": [
        { name: "Let's Encrypt", devicon: "letsencrypt", color: "#003a70" },
        { name: "OpenSSL", devicon: "openssl", color: "#721412" },
        { name: "Certbot", devicon: "certbot", color: "#ff9800" }
    ],
    "🌟 Sistemas Operacionais": [
        { name: "Windows", devicon: "windows8", color: "#0078d6" },
        { name: "macOS", devicon: "apple", color: "#000000" },
        { name: "FreeBSD", devicon: "freebsd", color: "#ab2b28" },
        { name: "OpenBSD", devicon: "openbsd", color: "#f2ca30" },
        { name: "Android OS", devicon: "android", color: "#3ddc84" },
        { name: "iOS", devicon: "apple", color: "#000000" }
    ]
};

let selectedLanguages = new Map();

function renderLanguages() {
    const container = document.getElementById('languagesContainer');
    container.innerHTML = '';

    for (const [category, languages] of Object.entries(languagesData)) {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'mb-6';

        categoryDiv.innerHTML = `
                    <div class="category-header">
                        <h3 class="text-sm font-bold text-white">${category}</h3>
                        <div class="flex items-center gap-2">
                            <span class="text-xs text-gray-400">${languages.length}</span>
                            <button onclick="selectCategory('${category}', event)" class="btn btn-secondary text-xs py-1 px-3">
                                Selecionar
                            </button>
                        </div>
                    </div>
                `;

        const grid = document.createElement('div');
        grid.className = 'grid grid-cols-[repeat(auto-fill,minmax(90px,1fr))] gap-2';

        languages.forEach((lang, index) => {
            const langId = `${category.replace(/\s/g, '-')}-${index}`;
            const iconUrl = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${lang.devicon}/${lang.devicon}-original.svg`;

            const card = document.createElement('div');
            card.className = 'icon-card';
            card.dataset.name = lang.name.toLowerCase();
            card.dataset.category = category;
            card.dataset.langid = langId;
            card.dataset.langData = JSON.stringify(lang);
            card.onclick = () => toggleSelection(card, lang);

            card.innerHTML = `
                        <img src="${iconUrl}" alt="${lang.name}">
                        <p class="text-white text-xs font-semibold text-center leading-tight">${lang.name}</p>
                        <div class="quantity-input w-full">
                            <label class="text-xs text-gray-400">Qtd:</label>
                            <input type="number" id="qty-${langId}" min="1" value="1"
                                onchange="updateIconQuantity('${langId}', this.value)"
                                onclick="event.stopPropagation()">
                        </div>
                    `;

            grid.appendChild(card);
        });

        categoryDiv.appendChild(grid);
        container.appendChild(categoryDiv);
    }

    for (const [langId, quantity] of selectedLanguages.entries()) {
        const card = document.querySelector(`[data-langid="${langId}"]`);
        if (card) {
            card.classList.add('selected');
            const qtyInput = card.querySelector(`#qty-${langId}`);
            if (qtyInput) qtyInput.value = quantity;
        }
    }

    updateStats();
    updatePreview();
}

function toggleSelection(card, lang) {
    const langId = card.dataset.langid;
    const qtyInput = card.querySelector(`#qty-${langId}`);

    if (selectedLanguages.has(langId)) {
        selectedLanguages.delete(langId);
        card.classList.remove('selected');
        if (qtyInput) qtyInput.value = 1;
    } else {
        selectedLanguages.set(langId, 1);
        card.classList.add('selected');
        if (qtyInput) qtyInput.value = 1;
    }

    updateStats();
    updatePreview();
}

function updateIconQuantity(langId, quantity) {
    if (selectedLanguages.has(langId)) {
        const qty = parseInt(quantity);
        if (qty > 0) {
            selectedLanguages.set(langId, qty);
        } else {
            document.querySelector(`[data-langid="${langId}"]`).click();
        }
    }
    updateStats();
    updatePreview();
}

function selectCategory(category, event) {
    event.stopPropagation();
    const cards = document.querySelectorAll(`[data-category="${category}"]`);
    const allSelected = Array.from(cards).every(card => selectedLanguages.has(card.dataset.langid));

    cards.forEach(card => {
        const langId = card.dataset.langid;
        const qtyInput = card.querySelector(`#qty-${langId}`);

        if (allSelected) {
            selectedLanguages.delete(langId);
            card.classList.remove('selected');
            if (qtyInput) qtyInput.value = 1;
        } else {
            selectedLanguages.set(langId, 1);
            card.classList.add('selected');
            if (qtyInput) qtyInput.value = 1;
        }
    });

    updateStats();
    updatePreview();
}

function clearSelection() {
    selectedLanguages.clear();
    document.querySelectorAll('[data-langid]').forEach(card => {
        card.classList.remove('selected');
        const qtyInput = card.querySelector('input[type="number"]');
        if (qtyInput) qtyInput.value = 1;
    });
    updateStats();
    updatePreview();
}

function updateStats() {
    const count = selectedLanguages.size;
    let totalStickers = 0;
    selectedLanguages.forEach(quantity => {
        totalStickers += quantity;
    });

    document.getElementById('selectedCount').textContent = count;
    document.getElementById('selectedIcons').textContent = count;
    document.getElementById('totalStickers').textContent = totalStickers;

    const stickerSize = parseInt(document.getElementById('stickerSize').value);
    const spacing = parseInt(document.getElementById('spacing').value);
    const maxFit = calculateMaxFit(stickerSize, spacing);
    document.getElementById('maxFit').textContent = maxFit;

    const sheetsNeeded = Math.ceil(totalStickers / maxFit);
    document.getElementById('sheetsNeeded').textContent = totalStickers > 0 ? sheetsNeeded : 0;

    document.getElementById('generateBtn').disabled = count === 0;
}

function getPaperDimensions() {
    const paperFormat = document.getElementById('paperFormat').value;

    if (paperFormat === 'custom') {
        const width = parseInt(document.getElementById('customWidth').value) || 210;
        const height = parseInt(document.getElementById('customHeight').value) || 297;
        return { width, height };
    } else {
        const [width, height] = paperFormat.split(',').map(Number);
        return { width, height };
    }
}

function handlePaperFormatChange() {
    const paperFormat = document.getElementById('paperFormat').value;
    const customDiv = document.getElementById('customPaperSize');

    if (paperFormat === 'custom') {
        customDiv.style.display = 'block';
    } else {
        customDiv.style.display = 'none';
    }

    updateStats();
    updatePreview();
}

function calculateMaxFit(stickerSize, spacing) {
    const { width, height } = getPaperDimensions();
    const margin = 10;

    const cellSize = stickerSize + spacing;
    const cols = Math.floor((width - 2 * margin) / cellSize);
    const rows = Math.floor((height - 2 * margin) / cellSize);

    return cols * rows;
}

function filterLanguages() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    document.querySelectorAll('[data-langid]').forEach(card => {
        card.style.display = card.dataset.name.includes(searchTerm) ? 'flex' : 'none';
    });
}

async function updatePreview() {
    const previewContainer = document.getElementById('previewContainer');
    const magnifier = document.getElementById('magnifier');

    // Limpa o conteúdo anterior, mas preserva a lupa
    while (previewContainer.firstChild && previewContainer.firstChild !== magnifier) {
        previewContainer.removeChild(previewContainer.firstChild);
    }

    if (selectedLanguages.size === 0) {
        const placeholder = document.createElement('div');
        placeholder.className = 'text-gray-400 text-xs text-center italic';
        placeholder.textContent = 'Selecione ícones';
        previewContainer.prepend(placeholder);
        return;
    }

    const generatingText = document.createElement('div');
    generatingText.className = 'text-gray-400 text-xs text-center italic';
    generatingText.textContent = 'Gerando...';
    previewContainer.prepend(generatingText);
    try {
        const stickerSize = parseInt(document.getElementById('stickerSize').value);
        const spacing = parseInt(document.getElementById('spacing').value);
        const shape = document.getElementById('stickerShape').value;
        const maxFit = calculateMaxFit(stickerSize, spacing);


        const uniqueSelectedLangIds = Array.from(selectedLanguages.keys());
        const iconsData = await fetchAllIcons(uniqueSelectedLangIds, false);

        const expandedArray = [];
        selectedLanguages.forEach((quantity, langId) => {
            for (let i = 0; i < quantity; i++) {
                expandedArray.push(langId);
            }
        });

        const svgPreview = await generateSheetSVG(0, stickerSize, spacing, shape, maxFit, iconsData, 'cores', expandedArray);

        // Limpa o "Gerando..." e insere o SVG
        if (previewContainer.firstChild && previewContainer.firstChild !== magnifier) {
            previewContainer.removeChild(previewContainer.firstChild);
        }
        previewContainer.insertAdjacentHTML('afterbegin', svgPreview);

    } catch (error) {
        console.error("Erro ao gerar preview:", error);
        previewContainer.innerHTML = `<div class="text-red-400 text-xs text-center">Erro</div><div id="magnifier" class="magnifier-loupe"></div>`;
    }
}

async function generateFiles() {
    const overlay = document.getElementById('loadingOverlay');
    overlay.classList.add('active');

    try {
        const stickerSize = parseInt(document.getElementById('stickerSize').value);
        const spacing = parseInt(document.getElementById('spacing').value);
        const shape = document.getElementById('stickerShape').value;
        const maxFit = calculateMaxFit(stickerSize, spacing);


        const uniqueSelectedLangIds = Array.from(selectedLanguages.keys());
        const iconsData = await fetchAllIcons(uniqueSelectedLangIds, true);

        const expandedArray = [];
        selectedLanguages.forEach((quantity, langId) => {
            for (let i = 0; i < quantity; i++) {
                expandedArray.push(langId);
            }
        });
        const totalSheets = Math.ceil(expandedArray.length / maxFit);

        document.getElementById('loadingText').textContent = 'Gerando arquivos DTF UV...';

        for (let sheet = 0; sheet < totalSheets; sheet++) {
            const svgCores = await generateSheetSVG(sheet, stickerSize, spacing, shape, maxFit, iconsData, 'cores', expandedArray);
            downloadFile(`adesivos-CORES-sheet${sheet + 1}-de-${totalSheets}.svg`, svgCores, 'image/svg+xml');

            const svgBranco = await generateSheetSVG(sheet, stickerSize, spacing, shape, maxFit, iconsData, 'branco', expandedArray);
            downloadFile(`adesivos-BRANCO-sheet${sheet + 1}-de-${totalSheets}.svg`, svgBranco, 'image/svg+xml');

            const svgVerniz = await generateSheetSVG(sheet, stickerSize, spacing, shape, maxFit, iconsData, 'verniz', expandedArray);
            downloadFile(`adesivos-VERNIZ-sheet${sheet + 1}-de-${totalSheets}.svg`, svgVerniz, 'image/svg+xml');
        }

        const totalFiles = totalSheets * 3;
        const uniqueIcons = selectedLanguages.size;
        const totalStickers = expandedArray.length;

        alert(`✅ ${totalFiles} arquivo(s) SVG gerado(s)!

📊 ${uniqueIcons} ícone(s) único(s) = ${totalStickers} adesivo(s)
🎨 CORES: Impressão CMYK
⚪ BRANCO: Camada base
✨ VERNIZ: Relevo UV 3D

Envie os 3 arquivos para gráfica!`);
    } finally {
        overlay.classList.remove('active');
    }
}

async function fetchAllIcons(selectedArray, showLoading = true) {
    const iconsData = {};
    const total = selectedArray.length;

    if (showLoading) {
        document.getElementById('loadingText').textContent = 'Baixando ícones...';
    }

    for (let i = 0; i < selectedArray.length; i++) {
        const langId = selectedArray[i];
        const card = document.querySelector(`[data-langid="${langId}"]`);
        if (!card) continue;

        const lang = JSON.parse(card.dataset.langData || '{}');
        if (!lang.devicon) {
            iconsData[langId] = { lang, svgText: null };
            continue;
        }

        const iconUrl = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${lang.devicon}/${lang.devicon}-original.svg`;

        if (showLoading) {
            document.getElementById('loadingProgress').textContent = `${lang.name} (${i + 1}/${total})`;
        }

        try {
            const response = await fetch(iconUrl);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const svgText = await response.text();
            iconsData[langId] = { lang, svgText };
        } catch (error) {
            console.error(`Erro ao buscar ${lang.name}:`, error);
            iconsData[langId] = { lang, svgText: null };
        }
    }

    if (showLoading) {
        document.getElementById('loadingText').textContent = 'Gerando SVG...';
        document.getElementById('loadingProgress').textContent = '';
    }

    return iconsData;
}

function getSanitizedSvgContent(svgText) {
    if (!svgText) return '';
    try {
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(svgText, 'image/svg+xml');
        const svgElement = svgDoc.querySelector('svg');
        if (!svgElement) return '';

        svgElement.querySelectorAll('*').forEach(el => {
            el.removeAttribute('fill');
            el.removeAttribute('stroke');
        });
        return svgElement.innerHTML;
    } catch (e) { return ''; }
}

function generateSheetSVG(sheetIndex, stickerSize, spacing, shape, maxFit, iconsData, layerType = 'cores', expandedArray) {
    const start = sheetIndex * maxFit;
    const end = Math.min(start + maxFit, expandedArray.length);
    const sheetLanguages = expandedArray.slice(start, end);

    const { width: paperWidth, height: paperHeight } = getPaperDimensions();
    const margin = 10;
    const cellSize = stickerSize + spacing;
    const cols = Math.floor((paperWidth - 2 * margin) / cellSize);

    const layerConfig = {
        cores: {
            title: `Adesivos CORES (CMYK) - Folha ${sheetIndex + 1}`,
            bgColor: 'white',
            description: 'Camada de impressão colorida - Enviar para impressora CMYK'
        },
        branco: {
            title: `Adesivos BRANCO (White Layer) - Folha ${sheetIndex + 1}`,
            bgColor: 'black',
            description: 'Camada de tinta branca - Define base opaca para cores'
        },
        verniz: {
            title: `Adesivos VERNIZ (UV Relief) - Folha ${sheetIndex + 1}`,
            bgColor: 'black',
            description: 'Camada de verniz UV - Define áreas com efeito 3D em alto relevo'
        }
    };

    const config = layerConfig[layerType];

    let svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${paperWidth}mm" height="${paperHeight}mm" viewBox="0 0 ${paperWidth} ${paperHeight}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <title>${config.title}</title>
  <desc>${config.description}</desc>
  <rect width="${paperWidth}" height="${paperHeight}" fill="${config.bgColor}"/>
`;

    let defs = '\n  <defs>';
    sheetLanguages.forEach((langId) => {
        const iconData = iconsData[langId];
        if (!iconData || !iconData.svgText) return;

        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(iconData.svgText, 'image/svg+xml');
        const svgElement = svgDoc.querySelector('svg');

        if (svgElement) {
            const viewBox = svgElement.getAttribute('viewBox') || '0 0 128 128';
            const innerHTML = (layerType === 'cores') ? svgElement.innerHTML : getSanitizedSvgContent(iconData.svgText);
            const iconId = langId.replace(/[^a-zA-Z0-9]/g, '-');
            defs += `\n    <symbol id="icon-${iconId}" viewBox="${viewBox}">${innerHTML}</symbol>`;
        }
    });
    defs += '\n  </defs>';
    svg += defs;

    sheetLanguages.forEach((langId, index) => {
        const iconData = iconsData[langId];
        if (!iconData) return;

        const lang = iconData.lang;
        if (!lang) return;

        const row = Math.floor(index / cols);
        const col = index % cols;
        const x = margin + (col * cellSize) + (cellSize / 2);
        const y = margin + (row * cellSize) + (cellSize / 2);

        const iconSize = stickerSize;
        const iconId = `icon-${langId.replace(/[^a-zA-Z0-9]/g, '-')}`;

        svg += `\n  <g transform="translate(${x}, ${y})">`;

        const stickerBackground = document.getElementById('stickerBackground').value;
        if (layerType === 'cores' && stickerBackground === 'icon_color') {
            const bgColor = lang.color || '#cccccc'; // Cor padrão cinza se não houver cor
            const bgSize = stickerSize;
            const borderRadius = (shape === 'rounded') ? bgSize * 0.15 : 0;

            if (shape === 'circle') {
                svg += `\n    <circle cx="0" cy="0" r="${bgSize / 2}" fill="${bgColor}" />`;
            } else {
                svg += `\n    <rect x="${-bgSize / 2}" y="${-bgSize / 2}" width="${bgSize}" height="${bgSize}" rx="${borderRadius}" ry="${borderRadius}" fill="${bgColor}" />`;
            }
        }

        if (iconData.svgText) {
            const fillColor = (layerType === 'branco' || layerType === 'verniz') ? 'fill="white"' : '';
            svg += `\n    <svg x="${-iconSize / 2}" y="${-iconSize / 2}" width="${iconSize}" height="${iconSize}" preserveAspectRatio="xMidYMid meet">`;
            svg += `\n      <use href="#${iconId}" width="100%" height="100%" ${fillColor}/>`;
            svg += `\n    </svg>`;
        } else {
            const fontSize = stickerSize / 8;
            svg += `\n    <text x="0" y="${fontSize / 3}" text-anchor="middle" font-size="${fontSize}" font-weight="bold" fill="${(layerType === 'cores') ? (lang.color || '#666') : 'white'}">${lang.name}</text>`;
        }

        svg += `\n  </g>`;
    });

    svg += `\n</svg>`;
    return svg;
}

function downloadFile(filename, content, mimeType) {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function setupMagnifier() {
    const previewContainer = document.getElementById('previewContainer');
    const magnifier = document.getElementById('magnifier');

    document.addEventListener('mousemove', (e) => {
        if (selectedLanguages.size === 0) {
            magnifier.style.display = 'none';
            return;
        }

        const rect = previewContainer.getBoundingClientRect();
        const isMouseOverPreview = e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;

        if (!isMouseOverPreview) {
            magnifier.style.display = 'none';
            previewContainer.classList.remove('zooming');
            return;
        }

        magnifier.style.display = 'block';
        previewContainer.classList.add('zooming');

        // --- Lógica de Zoom Dinâmico ---
        const stickerSize = parseInt(document.getElementById('stickerSize').value);
        const minStickerSize = 10;
        const maxStickerSize = 40;
        const minZoom = 1.5;
        const maxZoom = 4.5;
        const zoomLevel = maxZoom - ((stickerSize - minStickerSize) * (maxZoom - minZoom)) / (maxStickerSize - minStickerSize);
        // --- Fim da Lógica de Zoom ---

        const svgElement = previewContainer.querySelector('svg');
        if (!svgElement) return;

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        magnifier.style.left = `${x - magnifier.offsetWidth / 2}px`;
        magnifier.style.top = `${y - magnifier.offsetHeight / 2}px`;

        const svgUrl = `url("data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgElement.outerHTML)}")`;
        magnifier.style.backgroundImage = svgUrl;
        magnifier.style.backgroundSize = `${rect.width * zoomLevel}px ${rect.height * zoomLevel}px`;

        const bgX = `-${(x * zoomLevel) - magnifier.offsetWidth / 2}px`;
        const bgY = `-${(y * zoomLevel) - magnifier.offsetHeight / 2}px`;
        magnifier.style.backgroundPosition = `${bgX} ${bgY}`;
    });
}

window.addEventListener('DOMContentLoaded', renderLanguages);
window.addEventListener('DOMContentLoaded', updateStats);
window.addEventListener('DOMContentLoaded', setupMagnifier);
