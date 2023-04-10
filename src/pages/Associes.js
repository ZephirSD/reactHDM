import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { associes } from '../components/base/associes_base'

function Associes() {
    const [selectedId, setSelectedId] = useState(null);
    const [assoFind, setassoFind] = useState({});

    useEffect(() => {
        let result;
        if(selectedId != null){
            result = associes.find(findAsso => findAsso.id === selectedId);
            setassoFind(result);
        }
    },[selectedId]);
    return (
        <>
            <section className="associes_section">
                <div className="margin_container">
                    <div className="grid_case_associes">
                        {associes.map((asso, index)=> (
                            <motion.div key={index + 1} layoutId={index + 1} className='card_associe' style={{backgroundImage: `url(${asso.image})`}} onClick={() => setSelectedId(index + 1)} whileHover={{ scale: 0.95 }}>
                                <motion.div className='filter_dark'>
                                    <motion.h2>{asso.nomPrenom}</motion.h2>
                                    <motion.h5>{asso.metier}</motion.h5>
                                </motion.div>
                            </motion.div>
                        ))}
                        <AnimatePresence>
                            {selectedId && (
                            <motion.div className='case_flex_card' onClick={() => setSelectedId(null)} >
                                <motion.div layoutId={selectedId} className='case_animate_card'>
                                    <motion.div className='grid_card_animate'>
                                        <motion.div className='photo_card' style={{backgroundImage: `url(${assoFind.image})`}}></motion.div>
                                        <motion.div className='case_info_card'>
                                            <motion.h2>{assoFind.nomPrenom}</motion.h2>
                                            <motion.h5>{assoFind.metier}</motion.h5>                                            
                                        </motion.div>
                                    </motion.div>
                                    <motion.h5>{assoFind.telephone}</motion.h5>
                                    <motion.h5>{assoFind.secteur}</motion.h5>
                                    <motion.h5>{assoFind.description}</motion.h5>
                                </motion.div>
                            </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Associes
