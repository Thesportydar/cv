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
            technologies: ["AWS", "GCP", "Lambda", "SQS", "Textract", "S3", "DynamoDB", "Terraform", "Python"]
        },
        {
            title: "Backend & Data Engineer",
            company: "ISISTAN",
            location: "Tandil, Buenos Aires",
            isRemote: false,
            duration: "Abr. 2025 - Act.",
            description: [
                "Desarrollo del motor de análisis semántico basado en Inteligencia Artificial (IA) para la segunda base de datos pública más grande del país (CONICET/SIGEVA), procesando y estructurando décadas de producción científica nacional.",
                "Diseño de un pipeline NLP de dos etapas (bi-encoders + cross-encoders) para matching y asignación semántica de miles de perfiles.",
                "Implementé un sistema de reranking con cross-encoders, acelerando la inferencia en GPU (~9x speedup) al reemplazar APIs de alto nivel por forward manual y usar precisión mixta (FP16 + autocast), aprovechando Tensor Cores y paralelismo multi-GPU para escalar.",
                "Desarrollo de algoritmos de IA aplicada para matching complejo, búsqueda de expertos y conformación de comisiones técnicas.",
                "Orquestación de ETL híbridos y concurrentes (Python, Solr, PostgreSQL/pgvector) con detección de idioma en tiempo real y estrategias de caché.",
                "Arquitectura del puente tecnológico para vincular expertos con demandas de innovación de industrias líderes (Vaca Muerta, Globant, Mercado Libre, Meta) mediante la identificación precisa de capacidades técnicas.",
                "Gestión de infraestructura y escalabilidad (MLOps) mediante Docker, pipelines de CI/CD y la integración de motores de búsqueda con bases de datos relacionales."
            ],
            technologies: ["Python", "Apache Solr", "PostgreSQL", "pgvector", "PyTorch", "Docker", "Bash", "Gitlab", "Astro", "Node.js"]
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
            technologies: ["AWS", "GCP", "Lambda", "SQS", "Textract", "S3", "DynamoDB", "Terraform", "Python"]
        },
        {
            title: "Data & Backend Engineer",
            company: "ISISTAN",
            location: "Tandil, Buenos Aires",
            isRemote: false,
            duration: "Apr. 2025 - Present",
            description: [
                "Developed an AI-driven semantic analysis engine for the country's second largest public database (CONICET/SIGEVA), processing and structuring decades of national scientific production.",
                "Designed a two-stage NLP pipeline (bi-encoders + cross-encoders) for semantic matching and assignment across thousands of profiles.",
                "Implemented a cross-encoder reranking system, accelerating GPU inference (~9x speedup) by replacing high-level APIs with manual forward passes and utilizing mixed precision (FP16 + autocast), leveraging Tensor Cores and multi-GPU parallelism for scale.",
                "Developed applied AI algorithms for complex matching, expert search, and the formation of technical committees.",
                "Orchestrated concurrent and hybrid ETL pipelines (Python, Solr, PostgreSQL/pgvector) featuring real-time language detection and caching strategies.",
                "Architected a technological bridge to connect experts with innovation demands from leading industries (Vaca Muerta, Globant, Mercado Libre, Meta) through precise technical capability identification.",
                "Managed infrastructure and scalability (MLOps) via Docker, CI/CD pipelines, and the integration of search engines with relational databases."
            ],
            technologies: ["Python", "Apache Solr", "PostgreSQL", "pgvector", "PyTorch", "Docker", "Bash", "Gitlab", "Astro", "Node.js"]
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
