import { motion, scale } from "framer-motion"

const fadeInUp = {
    initial: {opacity: 0, y: 20},
    animate: {opacity: 1, y: 0},
    transition: {duration: 0.6},
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

export const Projects = () => {
    return (
        <motion.section 
            id="projects" 
            className="projects" 
            initial={{opacity: 0}} 
            whileInView={{opacity: 1}}
            viewport={{once: true}}
            transition={{duration: 0.6}}
        > 
            <motion.h2
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true}}
            >
                My Projects
            </motion.h2>
            <motion.div
                className="project-grid"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{once : true}}
            >
                <motion.div
                    className="project-card"
                    variants={fadeInUp}
                    whileHover={{
                        y: -10, 
                        transition: {
                            duration: 0.2 
                        }
                    }}
                >
                    <motion.div 
                        className="project-image"
                        style={{background:"url('/image.png')"}}
                        whileHover={{
                            scale: 1.05, 
                            transition: {duration: 0.2} 
                        }}
                    />
                        <h3>
                            Jettrack API Dagster Pipeline
                        </h3>
                        <p>
                            Created and automated a Dagster CI/CD pipeline that runs every 30 minutes, queries data from Jettrack's API to collect jet movement as an alternative data for Industrials team. Manually flattened JSON files for ideal output
                        </p>
                        <div className="project-tech">
                            <span>Dagster</span>
                            <span>Python</span>
                            <span>SQL</span>
                        </div>
                </motion.div>


                <motion.div
                    className="project-card"
                    variants={fadeInUp}
                    whileHover={{
                        y: -10, 
                        transition: {
                            duration: 0.2 
                        }
                    }}
                >
                    <motion.div 
                        className="project-image"
                        style={{background:"url('/image.png')"}}
                        whileHover={{
                            scale: 1.05, 
                            transition: {duration: 0.2} 
                        }}
                    />
                        <h3>
                            Kubecost Infinity Plugin Allocator
                        </h3>
                        <p>
                            Created an inhouse AWS Grafana dashboard using the infinity plugin to reduce idle costs for Kubernetes cluster, calling KubeCost API for real time data
                        </p>
                        <div className="project-tech">
                            <span>AWS Grafana</span>
                            <span>Kubernetes</span>
                            <span>JSONPath</span>
                        </div>

                </motion.div>


                <motion.div
                    className="project-card"
                    variants={fadeInUp}
                    whileHover={{
                        y: -10, 
                        transition: {
                            duration: 0.2 
                        }
                    }}
                >
                    <motion.div 
                        className="project-image"
                        style={{background:"url('/image.png')"}}
                        whileHover={{
                            scale: 1.05, 
                            transition: {duration: 0.2} 
                        }}
                    />
                        <h3>
                            University Registration & Advising System: Full-Stack
                        </h3>
                        <p>
                            Developed a database-integrated web application as part of an Agile team, designed to process 100+ student
course registrations and 20+ advising forms across multiple platforms.
                        </p>
                        <div className="project-tech">
                            <span>Python</span>
                            <span>SQL</span>
                            <span>HTML/CSS</span>
                        </div>

                </motion.div>
            </motion.div>
        </motion.section>
        );
}