export const jobsT = {
    "es": [
        {
            title: "Software Engineer (Python & AWS)",
            company: "Distribuidora Espora",
            location: "Tandil, Buenos Aires",
            isRemote: true,
            duration: "Ene. 2026 - Feb. 2026",
            description: [
                "Desarrollé en Python un <b>pipeline serverless y event-driven en AWS</b> para procesamiento de documentos, automatizando la ingesta y <b>eliminando ~5 horas diarias</b> de carga manual de datos. Aseguré el webhook público con verificación de firma <b>HMAC-SHA256</b>.",
                "Implementé un flujo asíncrono con <b>SQS, S3, Lambda y DynamoDB</b>, con procesamiento idempotente multicapa (locks), escrituras condicionales, correlación de estado, reintentos vía DLQ, mitigando duplicados por concurrencia/forward y evitando pérdida de datos siguiendo un enfoque <b>no-loss first</b>.",
                "Integré <b>Amazon Textract (OCR)</b> con lógica de extracción y validación determinística, con reglas de negocio para garantizar integridad transaccional y extracción estructurada de datos.",
                "Construí IaC con <b>Terraform</b> (remote state, IAM least privilege, SSM, parametrización por ambiente, dashboards/alertas).",
                "Implementé observabilidad end-to-end (<b>Powertools + CloudWatch metrics/alarms/dashboards</b>) con umbrales calibrados al volumen real."
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
                "Implementación del <b>motor de análisis semántico basado en Inteligencia Artificial (IA)</b> para la <b>segunda base de datos pública más grande del país</b> (CONICET/SIGEVA), permitiendo el procesamiento y la estructuración transversal de décadas de producción científica nacional.",
                "Diseño de un <b>pipeline de Machine Learning (NLP)</b> de dos etapas (<b>Bi-Encoders y Cross-Encoders</b>) para la resolución de problemas de asignación semántica y matching complejo, optimizando la precisión técnica en el cruce de miles de perfiles.",
                "Optimización de <b>inferencia masiva de modelos de ML</b> mediante <b>procesamiento paralelo Multi-GPU</b> utilizando torch.multiprocessing, logrando reducir tiempos de cómputo de minutos a segundos en volúmenes críticos de embeddings.",
                "Desarrollo de algoritmos para resolver problemas complejos de matching, asignación, conformación de comisiones y búsqueda de perfiles de alta precisión.",
                "Orquestación de <b>pipelines de datos (ETL) concurrentes</b> e híbridos (Python/Solr/PostgreSQL) con detección de idioma y sistemas de caché optimizado mediante compresión GZIP.",
                "Arquitectura del puente tecnológico para vincular el capital humano científico con demandas de innovación de industrias líderes (<b>Vaca Muerta, Globant, Mercado Libre, Meta</b>) mediante la identificación precisa de capacidades técnicas.",
                "Gestión de <b>infraestructura y escalabilidad (MLOps)</b> mediante <b>Docker, pipelines de CI/CD</b> y la integración de motores de búsqueda avanzados con bases de datos relacionales (PostgreSQL/MySQL)."
            ],
            technologies: ["Python", "Apache Solr", "Docker", "Docker Compose", "MySQL", "PostgreSQL", "Bash", "Git", "Gitlab", "Astro", "Node.js", "Flask"]
        },
        {
            title: "Fullstack Developer",
            company: "ISISTAN",
            location: "Tandil, Buenos Aires",
            isRemote: true,
            duration: "Ago. 2024 - Feb. 2025",
            description: [
                "<b>Práctica Profesional Supervisada</b> de desarrollo de software en el marco de un proyecto de investigación del ISISTAN.",
                "Diseño, desarrollo e implementación de una <b>plataforma web educativa fullstack</b> orientada a facilitar la enseñanza mediante Recorridos de Estudio e Investigación (REIs).",
                "Implementación de funcionalidades backend en <b>Python con SQLite y Redis</b> para trabajo colaborativo, seguimiento del progreso académico y gestión de datos.",
                "Desarrollo de algoritmos de <b>IA aplicada</b> para análisis automático de datos educativos, incluyendo procesamiento semántico con <b>Sentence Transformers</b>.",
                "Despliegue y validación de la plataforma con docentes y estudiantes en contextos reales de aula (<b>experiencia piloto</b>).",
                "Participación en la elaboración de una <b>publicación científica</b> presentada en una <b>conferencia internacional de didáctica en Barcelona</b> a partir de los resultados del piloto.",
                "Colaboración en tareas de investigación, definición de requerimientos, arquitectura y documentación bajo la supervisión del Dr. Alejandro Zunino y la Dra. Daniela Godoy."
            ],
            technologies: ["Astro.js", "TypeScript", "Python", "Docker", "SQLite", "Redis", "Bun.sh", "Preact", "Sentence Transformers"]
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
                "Developed in Python a <b>serverless, event-driven pipeline on AWS</b> for document processing, automating ingestion and <b>removing ~5 daily hours</b> of manual data entry. Secured the public webhook with <b>HMAC-SHA256</b> signature verification.",
                "Implemented an asynchronous flow with <b>SQS, S3, Lambda, and DynamoDB</b>, using multi-layer idempotent processing (locks), conditional writes, state correlation, and DLQ retries, mitigating concurrency/forward duplicates and preventing data loss with a <b>no-loss-first</b> approach.",
                "Integrated <b>Amazon Textract (OCR)</b> with deterministic extraction and validation logic, plus business rules to ensure transactional integrity and structured data extraction.",
                "Built IaC with <b>Terraform</b> (remote state, least-privilege IAM, SSM, environment-based parametrization, dashboards/alerts).",
                "Implemented end-to-end observability (<b>Powertools + CloudWatch metrics/alarms/dashboards</b>) with thresholds calibrated to real production volume."
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
                "Implemented an <b>AI-driven semantic analysis engine</b> for the <b>country’s second-largest public database</b> (CONICET/SIGEVA), enabling the cross-sectional processing and structuring of decades of national scientific production.",
                "Designed a <b>two-stage Machine Learning (NLP) pipeline</b> (<b>Bi-Encoders and Cross-Encoders</b>) to solve complex semantic assignment and matching problems, optimizing technical precision across thousands of profiles.",
                "Optimized <b>massive ML model inference</b> through <b>Multi-GPU parallel processing</b> using torch.multiprocessing, reducing computation times from minutes to seconds for critical embedding volumes.",
                "Developed <b>applied AI algorithms</b> to solve complex matching, assignment, committee formation, and high-precision profile search problems.",
                "Orchestrated <b>concurrent and hybrid data pipelines (ETL)</b> using Python, Solr, and PostgreSQL, featuring real-time language detection and <b>optimized caching systems</b>.",
                "Architected an <b>AI-driven technological bridge</b> to link scientific human capital with innovation demands from leading industries (<b>Vaca Muerta, Globant, Mercado Libre, Meta</b>) through precise technical capability identification.",
                "Managed <b>infrastructure and scalability (MLOps)</b> using <b>Docker, CI/CD pipelines</b>, and the integration of advanced search engines with relational databases (PostgreSQL/MySQL)."
            ],
            technologies: ["Python", "Apache Solr", "Docker", "Docker Compose", "MySQL", "PostgreSQL", "Bash", "Git", "Gitlab", "Astro", "Node.js", "Flask"]
        },
        {
            title: "Fullstack Developer",
            company: "ISISTAN",
            location: "Tandil, Buenos Aires",
            isRemote: true,
            duration: "Aug. 2024 - Feb. 2025",
            description: [
                "<b>Supervised Professional Internship</b> within an ISISTAN research project.",
                "Designed, developed, and implemented a <b>fullstack educational web platform</b> to support inquiry-based learning through Study and Research Paths (SRP).",
                "Implemented Python backend features with <b>SQLite and Redis</b> for collaborative work, academic progress tracking, and data management.",
                "Developed <b>applied AI algorithms</b> for automated educational data analysis, including semantic processing with <b>Sentence Transformers</b>.",
                "Deployed and validated the platform in real-world classroom pilots; the results led to a <b>scientific paper</b> presented at an <b>international didactics conference in Barcelona</b>.",
                "Collaborated on research, requirements definition, architectural design, and documentation under the supervision of Dr. Alejandro Zunino and Dr. Daniela Godoy."
            ],
            technologies: ["Astro.js", "TypeScript", "Python", "Docker", "SQLite", "Redis", "Bun.sh", "Preact", "Sentence Transformers"]
        }
    ]
}
