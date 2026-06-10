export const jobsT = {
    "es": [
        {
            title: "Software Engineer (Python & AWS)",
            company: "Distribuidora Espora",
            location: "Tandil, Buenos Aires",
            isRemote: true,
            duration: "Ene. 2026 - Feb. 2026",
            description: [
                "Diseñé e implementé un pipeline serverless y event-driven en AWS para procesamiento de documentos, eliminando ~5 horas diarias de carga manual y asegurando integridad end-to-end en un entorno productivo.",
                "Implementé un flujo asíncrono con SQS, S3, Lambda y DynamoDB con procesamiento idempotente multicapa (locks), escrituras condicionales, correlación de estado y reintentos vía DLQ, evitando duplicados y pérdida de datos bajo concurrencia.",
                "Adopté un enfoque no-loss-first con trade-offs explícitos entre falsos negativos y positivos, reforzado por validaciones determinísticas y reglas de negocio, priorizando integridad contable en un sistema crítico.",
                "Integré Amazon Textract (OCR) con lógica de extracción y validación determinística, con reglas de negocio para garantizar integridad transaccional y extracción estructurada de datos.",
                "Aseguré endpoints públicos con verificación de firma HMAC-SHA256 y gestioné toda la infraestructura como código con Terraform (remote state, IAM least privilege, SSM, parametrización por entorno).",
                "Implementé observabilidad end-to-end con AWS Powertools + CloudWatch (métricas, alarmas y dashboards calibrados al volumen real)."
            ],
            technologies: ["AWS", "Lambda", "SQS", "Textract", "S3", "DynamoDB", "Terraform", "Python"]
        },
        {
            title: "AI Engineer",
            company: "ISISTAN",
            location: "Tandil, Buenos Aires",
            isRemote: false,
            duration: "Abr. 2025 - Act.",
            description: [
                "Desarollo del motor de análisis semántico de CONICET/SIGEVA: indexa +27k personas y millones de producciones científicas para búsqueda semántica, profiling automático y asignación de postulantes e ingresantes mediante NLP multi-idioma.",
                "Implementé un pipeline de matching de dos etapas (bi-encoder + cross-encoder) para asignar revisores a perfiles de investigación respetando restricciones institucionales y maximizando afinidad semántica.",
                "Optimicé el reranker cross-encoder reemplazando APIs de alto nivel por forward passes manuales con precisión mixta (FP16 + autocast), logrando ~9x de speedup al aprovechar Tensor Cores y habilitando el procesamiento paralelo multi-GPU.",
                "Desarrollo de una PoC de buscador de investigadores para demandas industriales (Globant, Mercado Libre, Vaca Muerta): identifica en segundos a los expertos más relevantes para un problema técnico dado.",
                "Orquestación de ETL híbridos y concurrentes con detección de idioma en tiempo real, estrategias de caché, y gestión de infraestructura (MLOps) mediante Docker y CI/CD."
            ],
            technologies: ["Python", "PyTorch", "Apache Solr", "PostgreSQL", "pgvector", "Docker", "Bash", "Gitlab", "Astro", "Node.js"]
        },
        {
            title: "Software Developer",
            company: "ISISTAN",
            location: "Tandil, Buenos Aires",
            isRemote: true,
            duration: "Ago. 2024 - Mar. 2025",
            description: [
                "Diseñé, desarrollé e implementé una plataforma web educativa fullstack para soportar Recorridos de Estudio e Investigación (REIs), un enfoque didáctico orientado a preguntas generadoras que promueve el aprendizaje colaborativo y significativo en matemática.",
                "Construí el núcleo de la aplicación (Astro SSR con Bun) junto con un worker asíncrono en Python para procesar automáticamente preguntas y respuestas de estudiantes, generando reportes de progreso e identificación de patrones.",
                "Implementé autenticación con roles diferenciados (docentes y alumnos), almacenamiento de archivos y funcionalidades de colaboración y seguimiento.",
                "Desarrollé análisis automático de datos educativos mediante embeddings y técnicas de NLP para agrupar respuestas y evaluar avances.",
                "Desplegué la plataforma en un piloto real con docentes y estudiantes, validando su adopción en contexto de aula.",
                "Coautoricé una publicación científica con los resultados del piloto, presentada en una conferencia internacional de didáctica en Barcelona."
            ],
            technologies: ["Astro.js", "TypeScript", "Tailwind CSS", "HTMX", "Python", "SQLite", "Redis", "Bun.sh", "Preact", "Scikit-Learn"]
        }
    ],
    "en": [
        {
            title: "Software Engineer (Python & AWS)",
            company: "Distribuidora Espora",
            location: "Tandil, Buenos Aires",
            isRemote: true,
            duration: "Jan. 2026 - Feb. 2026",
            description: [
                "Designed and implemented a serverless, event-driven pipeline on AWS for document processing, eliminating ~5 daily hours of manual data entry and ensuring end-to-end integrity in a production environment.",
                "Implemented an asynchronous flow with SQS, S3, Lambda, and DynamoDB using multi-layer idempotent processing (locks), conditional writes, state correlation, and DLQ retries, avoiding duplicates and data loss under concurrency.",
                "Adopted a no-loss-first approach with explicit trade-offs between false negatives and positives, reinforced by deterministic validations and business rules, prioritizing accounting integrity in a critical system.",
                "Integrated Amazon Textract (OCR) with deterministic extraction and validation logic, plus business rules to ensure transactional integrity and structured data extraction.",
                "Secured public endpoints with HMAC-SHA256 signature verification and managed all infrastructure as code with Terraform (remote state, least-privilege IAM, SSM, environment-based parametrization).",
                "Implemented end-to-end observability with AWS Powertools + CloudWatch (metrics, alarms, and dashboards calibrated to real production volume)."
            ],
            technologies: ["AWS", "Lambda", "SQS", "Textract", "S3", "DynamoDB", "Terraform", "Python"]
        },
        {
            title: "AI Engineer",
            company: "ISISTAN",
            location: "Tandil, Buenos Aires",
            isRemote: false,
            duration: "Apr. 2025 - Present",
            description: [
                "Designed the semantic analysis engine for CONICET/SIGEVA: indexes 27k+ profiles and millions of scientific publications for semantic search, automatic profiling, and reviewer assignment across fellowship and researcher intake processes via multilingual NLP. Featured in press as an AI innovation in public sector management.",
                "Implemented a two-stage matching pipeline (bi-encoder + cross-encoder) to assign reviewers to research profiles while enforcing institutional constraints (conflicts of interest, quotas) and maximizing semantic affinity.",
                "Optimized the cross-encoder reranker by replacing high-level APIs with manual forward passes and mixed precision (FP16 + autocast), achieving ~9x GPU speedup by leveraging Tensor Cores and enabling multi-GPU parallel processing.",
                "Built a PoC expert search engine for industrial demands (Globant, Mercado Libre, Vaca Muerta): identifies the most relevant researchers for a given technical problem in seconds.",
                "Orchestrated concurrent hybrid ETL pipelines with real-time language detection, caching strategies, and infrastructure management (MLOps) via Docker and CI/CD."
            ],
            technologies: ["Python", "PyTorch", "Apache Solr", "PostgreSQL", "pgvector", "Docker", "Bash", "Gitlab", "Astro", "Node.js"]
        },
        {
            title: "Software Developer",
            company: "ISISTAN",
            location: "Tandil, Buenos Aires",
            isRemote: true,
            duration: "Aug. 2024 - Mar. 2025",
            description: [
                "Designed, developed, and implemented a fullstack educational web platform to support Study and Research Paths (SRP), an inquiry-based didactic approach that promotes collaborative and meaningful learning in mathematics.",
                "Built the core application (Astro SSR with Bun) alongside an asynchronous Python worker to automatically process student questions and answers, generating progress reports and identifying patterns.",
                "Implemented role-based authentication (teachers and students), file storage, and real-time collaboration and tracking capabilities.",
                "Developed automated educational data analysis utilizing embeddings and NLP techniques to cluster responses and evaluate progress.",
                "Deployed the platform in a real-world classroom pilot with teachers and students, validating its adoption in context.",
                "Co-authored a scientific paper presenting the pilot results at an international didactics conference in Barcelona."
            ],
            technologies: ["Astro.js", "TypeScript", "Tailwind CSS", "HTMX", "Python", "SQLite", "Redis", "Bun.sh", "Preact", "Scikit-Learn"]
        }
    ]
}
