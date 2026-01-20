export interface Project {
    title: string;
    description: string;
    stack: string[];
    github?: string;
    demo?: string;
    status: "completed" | "in-progress";
}

export const projects: Project[] = [
    {
        title: "OCR Web App",
        description: "Aplicación web para reconocimiento de texto manuscrito utilizando Python y una interfaz moderna en React.",
        stack: ["Python", "FastAPI", "React", "Machine Learning"],
        github: "",
        demo: "",
        status: "in-progress"
    },
    {
        title: "Clasificación de radiografías pulmonares con TensorFlow.js (COVID-19, Neumonía, Normal)",
        description: "Aplicación web que utiliza un modelo de deep learning ejecutado directamente en el navegador mediante TensorFlow.js para clasificar imágenes médicas en tres categorías: COVID-19, neumonía y pulmones normales, sin necesidad de backend.",
        stack: ["Python", "HTML5", "CSS3", "JavaScript", "TensorFlow.js", "Deep Learning (CNN)", "TensorFlow / Keras","Procesamiento de imágenes", "Inferencia en el navegador"],
        github: "https://github.com/Edwincala/covid-pneumonia-detector",
        demo: "https://edwincala.github.io/covid-pneumonia-detector/",
        status: "completed"
    },
    {
        title: "Proyecto en desarrollo",
        description: "Nuevo proyecto en construcción. Próximamente más detalles.",
        stack: [],
        status: "in-progress"
    }
]
