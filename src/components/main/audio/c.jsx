import s from "./c.module.css"
import { motion } from "framer-motion"
import gag1 from "../../../audio/gagik 1.mp4"
import gag2 from "../../../audio/gagik 2.mp4"
function Audio() {
    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
        >
            {/* ........ */}
            <div className={s.gicdiv2}>
                <div className={s.gic2}></div>
            </div>
            {/* ......... */}
            <div className={s.box}>

                <div className={s.box2}>

                    <div className={s.hw1}>
                        <h3 className={s.hw3}>Զրուցակից` Նարեկ Հարությունյան (աշակերտ)</h3>

                        <h4 className={s.hw3}>Զրույցը վարող` Գագիկ Գասպարյան</h4>
                    </div>
                    <div>
                        <h1 className={s.hw2}>1</h1>
                    </div>
                    <div>
                        <video controls src={gag1} className={s.audio} />
                    </div>

                </div>
            </div>

            {/* ........ */}
            <div className={s.gicdiv2}>
                <div className={s.gic2}></div>
            </div>
            {/* ......... */}


            <div className={s.gicdiv2}>
                <div className={s.gic2}></div>
            </div>
            {/* ......... */}
            <div className={s.box}>

                <div className={s.box2}>

                    <div>
                        <video controls src={gag2} className={s.audio} />
                    </div>
                    <div>
                        <h1 className={s.hw2}>2</h1>
                    </div>
                    <div className={s.hw1}>
                        <h3 className={s.hw3}>Զրուցակից` Աննա Պողոսյան (ծնող)</h3>

                        <h4 className={s.hw3}>Զրույցը վարող` Գագիկ Գասպարյան</h4>
                    </div>

                </div>
            </div>

            {/* ........ */}
            <div className={s.gicdiv2}>
                <div className={s.gic2}></div>
            </div>
            {/* ......... */}
            <div className={s.box}>

                <div className={s.box2}>

                    <div className={s.hw1}>
                        <h3 className={s.hw3}>Զրուցակից`  ()</h3>

                        <h4 className={s.hw3}>Զրույցը վարող` </h4>
                    </div>
                    <div>
                        <h1 className={s.hw2}>3</h1>
                    </div>
                    <div>
                        <video controls src={gag1} className={s.audio} />
                    </div>

                </div>
            </div>

            {/* ........ */}
            <div className={s.gicdiv2}>
                <div className={s.gic2}></div>
            </div>
            {/* ......... */}


            <div className={s.gicdiv2}>
                <div className={s.gic2}></div>
            </div>
            {/* ......... */}
            <div className={s.box}>

                <div className={s.box2}>

                    <div>
                        <video controls src={gag1} className={s.audio} />
                    </div>
                    <div>
                        <h1 className={s.hw2}>4</h1>
                    </div>
                    <div className={s.hw1}>
                        <h3 className={s.hw3}>Զրուցակից`  ()</h3>

                        <h4 className={s.hw3}>Զրույցը վարող` </h4>
                    </div>

                </div>
            </div>

            {/* ........ */}
            <div className={s.gicdiv2}>
                <div className={s.gic2}></div>
            </div>
            {/* ......... */}
            <div className={s.box}>

                <div className={s.box2}>

                    <div className={s.hw1}>
                        <h3 className={s.hw3}>Զրուցակից`  ()</h3>

                        <h4 className={s.hw3}>Զրույցը վարող` </h4>
                    </div>
                    <div>
                        <h1 className={s.hw2}>5</h1>
                    </div>
                    <div>
                        <video controls src={gag1} className={s.audio} />
                    </div>

                </div>
            </div>

            {/* ........ */}
            <div className={s.gicdiv2}>
                <div className={s.gic2}></div>
            </div>
            {/* ......... */}


            <div className={s.gicdiv2}>
                <div className={s.gic2}></div>
            </div>
            {/* ......... */}
            <div className={s.box}>

                <div className={s.box2}>

                    <div>
                        <video controls src={gag1} className={s.audio} />
                    </div>
                    <div>
                        <h1 className={s.hw2}>6</h1>
                    </div>
                    <div className={s.hw1}>
                        <h3 className={s.hw3}>Զրուցակից`  ()</h3>

                        <h4 className={s.hw3}>Զրույցը վարող` </h4>
                    </div>

                </div>
            </div>

            {/* ........ */}
            <div className={s.gicdiv2}>
                <div className={s.gic2}></div>
            </div>
            {/* ......... */}
            <div className={s.box}>

                <div className={s.box2}>

                    <div className={s.hw1}>
                        <h3 className={s.hw3}>Զրուցակից`  ()</h3>

                        <h4 className={s.hw3}>Զրույցը վարող` </h4>
                    </div>
                    <div>
                        <h1 className={s.hw2}>7</h1>
                    </div>
                    <div>
                        <video controls src={gag1} className={s.audio} />
                    </div>

                </div>
            </div>


            {/* ........ */}
            <div className={s.gicdiv2}>
                <div className={s.gic2}></div>
            </div>
            {/* ......... */}

        </motion.div>
    );
}

export default Audio;