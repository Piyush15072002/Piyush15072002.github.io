import Loader from 'react-loaders';
import './index.scss';

import boot from '../../assets/images/skills/boot.png';
import clang from '../../assets/images/skills/clang.png';
import cplus from '../../assets/images/skills/cplus.png';
import csharp from '../../assets/images/skills/csharp.png';
import css from '../../assets/images/skills/css.png';
import dj from '../../assets/images/skills/dj.png';
import flask from '../../assets/images/skills/flask.png';
import git from '../../assets/images/skills/git.png';
import html from '../../assets/images/skills/html.png';
import java from '../../assets/images/skills/java.png';
import js from '../../assets/images/skills/js.png';
import mat from '../../assets/images/skills/mat.png';
import mongo from '../../assets/images/skills/mongo.png';
import nodejs from '../../assets/images/skills/nodejs.png';
import numpy from '../../assets/images/skills/numpy.png';
import pandas from '../../assets/images/skills/pandas.png';
import python from '../../assets/images/skills/python.png';
import pytorch from '../../assets/images/skills/pytorch.png';
import rt from '../../assets/images/skills/react.png';
import rlang from '../../assets/images/skills/rlang.png';
import sass from '../../assets/images/skills/sass.png';
import scikit from '../../assets/images/skills/scikit.png';
import seaborn from '../../assets/images/skills/seaborn.png';
import sql from '../../assets/images/skills/sql.png';
import tail from '../../assets/images/skills/tail.png';
import tensorflow from '../../assets/images/skills/tensorflow.png';
import vsc from '../../assets/images/skills/vsc.png';







const Skills = () => {

    return (

        <>
            <div className="container skills-page">
                <div className="text-zone">
                    <h1>My Skills</h1>
                </div>

                <div className="dsai">
                    <h4>
                        AI / Data Science Skills
                    </h4>
                    <br />
                    <div className="icons">
                        <img src={python} alt="python" />
                        <img src={rlang} alt="rlang" />
                        <img src={numpy} alt="numpy" />
                        <img src={pandas} alt="pandas" style={{ width: '70px' }} />
                        <img src={mat} alt="matplotlib" style={{ width: '100px' }} />
                        <img src={seaborn} alt="seaborn" style={{ width: '100px' }} />
                        <img src={pytorch} alt="pytorch" />
                        <img src={tensorflow} alt="tensorflow" />
                        <img src={scikit} alt="scikitLearn" style={{ width: '90px' }} />
                        <img src={sql} alt="sql" style={{ width: '90px' }} />
                    </div>
                </div>

                <div className="dev">
                    <h4>
                        Dev Skills
                    </h4>
                    <br />
                    <div className="icons">
                        <img src={js} alt="js" />
                        <img src={clang} alt="clang" />
                        <img src={java} alt="java" />
                        <img src={rt} alt="reactjs" />
                        <img src={mongo} alt="mongo" style={{ width: '100px' }} />
                        <img src={nodejs} alt="nodejs" style={{ width: '80px' }} />
                        <img src={html} alt="html" />
                        <img src={css} alt="css" />
                        <img src={boot} alt="boot" />
                        <img src={tail} alt="tail" />
                        <img src={git} alt="git" />
                        <img src={cplus} alt="cplus" />
                        <img src={csharp} alt="csharp" />
                        <img src={sass} alt="sass" />
                        <img src={vsc} alt="vsc" />
                        <img src={flask} alt="flask" />
                        <img src={dj} alt="dj" />

                    </div>
                </div>




            </div>

            <Loader type="pacman" />
        </>
    )
}


export default Skills