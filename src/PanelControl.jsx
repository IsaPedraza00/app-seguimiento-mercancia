import imgUser from './assets/user.jpg'
function PanelControl() {
    return (
        <section className="panel-control">
            <aside className="panel-control-aside">  {/*Lo que se encuentra en un lateral*/}  
                <div >
                    <img src={imgUser} alt="Logo" />
                </div>
                <nav>
                    <ul>
                        <il><a href=""></a></il>
                        <il><a href=""></a></il>
                        <il><a href=""></a></il>
                        <il><a href=""></a></il>
                    </ul>
                </nav>

            </aside>
            <div className="panel-control-contenido">
                <section className="panel-control-card">
                    <div></div> {/*parte azul */}  
                    <div>
                        <p>Ver</p>
                    </div>  {/*parte blanca */}  

                </section>
                <section className="panel-control-contenido">
                    <div></div> {/*parte  azul   */}  
                    <div>
                        <p>Ver</p>
                    </div>  {/*parte blanca */}  

                </section>
                <section className="panel-control-contenido">
                    <div></div> {/*parte azul */}  
                    <div>
                        <p>Ver</p>
                    </div> {/*parte blanca */}  

                </section>

            </div>
        </section>
    )

}

export default PanelControl

