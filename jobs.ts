export const jobsT = {
    "es": [
        {
            title: "Software Engineer (Python & AWS)",
            company: "Distribuidora Espora",
            location: "Tandil, Buenos Aires",
            isRemote: true,
            duration: "Ene. 2026 - Act.",
            description: [
                "Desarrollé en Python un pipeline serverless y event-driven en AWS para procesamiento de documentos, automatizando la ingesta y eliminando ~5 horas diarias de carga manual de datos. Aseguré el webhook público con verificación de firma HMAC-SHA256.",
                "Implementé un flujo asíncrono con SQS, S3, Lambda y DynamoDB, con procesamiento idempotente multicapa (locks), escrituras condicionales, correlación de estado, reintentos vía DLQ, mitigando duplicados por concurrencia/forward y evitando pérdida de datos siguiendo un enfoque no-loss first",
                "Integré Amazon Textract (OCR) con lógica de extracción y validación determinística, con reglas de negocio para garantizar integridad transaccional y extracción estructurada de datos.",
                "Construí IaC con Terraform (remote state, IAM least privilege, SSM, parametrización por ambiente, dashboards/alertas).",
                "Implementé observabilidad end-to-end (Powertools + CloudWatch metrics/alarms/dashboards) con umbrales calibrados al volumen real."

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
                "Diseño, desarrollo y mantenimiento de sistemas backend en Python orientados a la toma de decisiones, incluyendo servicios de información, interfaces web y visualización de datos.",
                "Gestión y operación de entornos de ejecución para sistemas productivos y de prueba, incluyendo despliegue en máquinas virtuales, administración de servidores web y uso de contenedores.",
                "Diseño y configuración de entornos reproducibles de desarrollo mediante Docker y Docker Compose.",
                "Administración de bases de datos (backup, restore, optimización) en entornos de desarrollo y pruebas.",
                "Construcción de pipelines de datos de alto volumen en Python, integrando motores de búsqueda y bases de datos relacionales.",
                "Implementación de soluciones de Inteligencia Artificial aplicada (análisis semántico, búsqueda y ranking), validando enfoques técnicos mediante Pruebas de Concepto (PoCs).",
                "Participación en instancias de definición con áreas de gerencia, traduciendo necesidades funcionales en soluciones técnicas."
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
                "Práctica Profesional Supervisada de desarrollo de software en el marco de un proyecto de investigación del ISISTAN.",
                "Diseño, desarrollo e implementación de una plataforma web educativa fullstack orientada a facilitar la enseñanza mediante Recorridos de Estudio e Investigación (REIs).",
                "Implementación de funcionalidades backend en Python con SQLite y Redis para trabajo colaborativo, seguimiento del progreso académico y gestión de datos.",
                "Desarrollo de algoritmos de IA aplicada para análisis automático de datos educativos, incluyendo procesamiento semántico con Sentence Transformers.",
                "Despliegue y validación de la plataforma con docentes y estudiantes en contextos reales de aula (experiencia piloto).",
                "Participación en la elaboración de una publicación científica presentada en una conferencia internacional de didáctica en Barcelona a partir de los resultados del piloto.",
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
            duration: "Jan. 2026 - Present",
            description: [
                "Developed in Python a serverless, event-driven pipeline on AWS for document processing, automating ingestion and removing ~5 daily hours of manual data entry. Secured the public webhook with HMAC-SHA256 signature verification.",
                "Implemented an asynchronous flow with SQS, S3, Lambda, and DynamoDB, using multi-layer idempotent processing (locks), conditional writes, state correlation, and DLQ retries, mitigating concurrency/forward duplicates and preventing data loss with a no-loss-first approach.",
                "Integrated Amazon Textract (OCR) with deterministic extraction and validation logic, plus business rules to ensure transactional integrity and structured data extraction.",
                "Built IaC with Terraform (remote state, least-privilege IAM, SSM, environment-based parametrization, dashboards/alerts).",
                "Implemented end-to-end observability (Powertools + CloudWatch metrics/alarms/dashboards) with thresholds calibrated to real production volume."
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
                "Design, development, and maintenance of Python backend systems focused on decision-making, including information services, web interfaces and data visualization.",
                "Management and operation of infrastructure for production and staging environments, including VM deployment, web server administration, and container orchestration.",
                "Design of reproducible development environments using Docker and Docker Compose.",
                "Database administration in development and staging environments, including backups, dumps, and restoration procedures.",
                "Construction of high-volume data pipelines in Python integrating search engines and relational databases.",
                "Implementation of Applied AI and data processing solutions (semantic analysis, search, and ranking), validating approaches through Proofs of Concept (PoCs).",
                "Collaboration with management and stakeholders to translate functional requirements into technical solutions."
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
                "Supervised Professional Internship within an ISISTAN research project.",
                "Designed, developed, and implemented a fullstack educational web platform to support inquiry-based learning through Study and Research Paths (SRP).",
                "Implemented Python backend features with SQLite and Redis for collaborative work, academic progress tracking, and data management.",
                "Developed applied AI algorithms for automated educational data analysis, including semantic processing with Sentence Transformers.",
                "Deployed and validated the platform in real-world classroom pilots; the results led to a scientific paper presented at an international didactics conference in Barcelona.",
                "Collaborated on research, requirements definition, architectural design, and documentation under the supervision of Dr. Alejandro Zunino and Dr. Daniela Godoy."
            ],
            technologies: ["Astro.js", "TypeScript", "Python", "Docker", "SQLite", "Redis", "Bun.sh", "Preact", "Sentence Transformers"]
        }
    ]
}
