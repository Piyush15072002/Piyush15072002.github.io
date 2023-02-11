import Loader from 'react-loaders'
import './index.scss'

const Research = () => {

    return (

        <>

            <div className="container research-page">


                <div className="text-zone">

                    <h1>
                        My Research
                    </h1>

                    <div className="citations">

                        <li>
                            P. Pant et al., "Blockchain for AI-Enabled Industrial IoT with 5G Network," 2022 14th International Conference on Electronics, Computers and Artificial Intelligence (ECAI), Ploiesti, Romania, 2022, pp. 1-4, doi: 10.1109/ECAI54874.2022.9847428.
                        </li>

                        <li>
                            Potgantwar, Amol and Aggarwal, Sambhav and Pant, Piyush and Rajawat, Anand Singh and Chauhan, Chetan and Waghmare, Vivek N, Secure Aspect of Digital Twin For Industry 4.0 Application Improvement Using Machine Learning (August 11, 2022). Available at SSRN: https://ssrn.com/abstract=4187977 or http://dx.doi.org/10.2139/ssrn.4187977
                        </li>
                        <li>
                            Rajawat, A. S., Goyal, S. B., Pant, P., & Bedi, P. (2022). AI-Enabled Internet of Nano Things Methodology for Healthcare Information Management. In S. Kautish & G. Dhiman (Eds.), AI-Enabled Multiple-Criteria Decision-Making Approaches for Healthcare Management (pp. 222-239). IGI Global. https://doi.org/10.4018/978-1-6684-4405-4.ch012
                        </li>

                        <li>
                            Pant, P. & Taghipour, A. (2023). Machine Learning and Blockchain for 5G-Enabled IIoT. In A. Taghipour (Ed.), Blockchain Applications in Cryptocurrency for Technological Evolution (pp. 196-212). IGI Global. https://doi.org/10.4018/978-1-6684-6247-8.ch012
                        </li>
                        <li>
                            Pant, P., Rajawat, A. S., Goyal, S. B., Bedi, P., Verma, C., Raboaca, M. S., &amp; Enescu, F. M. (2022). Authentication and authorization in modern web apps for data security using Nodejs and role of dark web. Procedia Computer Science, 215, 781-790. https://doi.org/10.1016/j.procs.2022.12.080
                        </li>

                        <span className="more">
                            More under process...
                        </span>


                    </div>


                </div>

            </div>


            <Loader type="pacman" />

        </>

    )

}



export default Research