export const SURVEY_API_BASE_URL = "https://msw8uqbihb.execute-api.us-east-1.amazonaws.com/prod"

export const ORGANIZATION_ROLES = [
    { "name": "Business Directive" },
    { "name": "Business Sponsor" },
    { "name": "Business Architect" },
    { "name": "Business Analyst" },
    { "name": "Digital Transformation Directive" },
    { "name": "Digital Transformation Sponsor" },
    { "name": "Digital Transformation Analyst" },
    { "name": "Product Owner" },
    { "name": "IT Directive" },
    { "name": "IT Analyst" },
    { "name": "IT Architect" },
    { "name": "IT Development" },
    { "name": "IT Operations" },
    { "name": "IT DevOps" },
    { "name": "IT Outsourcing" },
    { "name": "IT Consultant" }
];

export const SURVEY =
{
    "name": "DevOps Assessment",
    "sections": [
        {
            "name": "Business",
            "questions": [
                {
                    "id": "001",
                    "text": "Las áreas de negocio relacionadas con el producto de software son cercanas al equipo de implementación y suelen estár disponibles solucionar de dudas e inquietudes",
                    "type": "checkbox",
                    "options": [
                        {
                            "value": 1,
                            "text": "No nos comportamos así"
                        },
                        {
                            "value": 2,
                            "text": "Algunas veces lo hacemos"
                        },
                        {
                            "value": 3,
                            "text": "Es frecuente que lo hagamos"
                        },
                        {
                            "value": 4,
                            "text": "Lo hacemos en la mayoría de las ocasiones"
                        },
                        {
                            "value": 5,
                            "text": "Somos un ejemplo en este aspecto"
                        }
                    ]
                },
                {
                    "id": "002",
                    "text": "Dentro de los proyectos de desarrollo de software, las áreas de negocio son representadas por personas con poder de decisión con respecto al producto y/o el proyecto con un grado adecuado de autonomía para no ser cuello de botella.",
                    "type": "radio",
                    "options": [
                        {
                            "value": 1,
                            "text": "No nos comportamos así"
                        },
                        {
                            "value": 2,
                            "text": "Algunas veces lo hacemos"
                        },
                        {
                            "value": 3,
                            "text": "Es frecuente que lo hagamos"
                        },
                        {
                            "value": 4,
                            "text": "Lo hacemos en la mayoría de las ocasiones"
                        },
                        {
                            "value": 5,
                            "text": "Somos un ejemplo en este aspecto"
                        }
                    ]
                }]
        },
        {
            "name": "Agile",
            "questions": [
                {
                    "id": "003",
                    "text": "Cuando es necesario tomar decisiones que implican la colaboración entre diferentes áreas de la organización, dichas decisiones se toman en corto tiempo privilegiando los objetivos de la organización sobre las particularidades de cada área (Objetivos, Indicadores, Pocisiones de poder, otros)",
                    "type": "checkbox",
                    "options": [
                        {
                            "value": 1,
                            "text": "No nos comportamos así"
                        },
                        {
                            "value": 2,
                            "text": "Algunas veces lo hacemos"
                        },
                        {
                            "value": 3,
                            "text": "Es frecuente que lo hagamos"
                        },
                        {
                            "value": 4,
                            "text": "Lo hacemos en la mayoría de las ocasiones"
                        },
                        {
                            "value": 5,
                            "text": "Somos un ejemplo en este aspecto"
                        }
                    ]
                },
                {
                    "id": "004",
                    "text": "El estado de avance de los proyectos de tecnología se mide considerando principalmente la cantidad de resultados que han sido generados y que entregan valor para su público objetivo.  Es decir, el porcentaje de avance no se basa en diagramas de gant sino en los entregables que ya están generando valor.",
                    "type": "radio",
                    "options": [
                        {
                            "value": 1,
                            "text": "No nos comportamos así"
                        },
                        {
                            "value": 2,
                            "text": "Algunas veces lo hacemos"
                        },
                        {
                            "value": 3,
                            "text": "Es frecuente que lo hagamos"
                        },
                        {
                            "value": 4,
                            "text": "Lo hacemos en la mayoría de las ocasiones"
                        },
                        {
                            "value": 5,
                            "text": "Somos un ejemplo en este aspecto"
                        }
                    ]
                }]
        }
    ]
};