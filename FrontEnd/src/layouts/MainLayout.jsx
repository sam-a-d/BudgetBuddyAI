import NavSidebar from "../components/NavSidebar";
import { Children, Component } from "react";
import PCHeader from "../components/PCHeader";

import '../js/dashboard-default.js'
import '../js/script.js'



class MainLayout extends Component {
    render(){
        return(
            <div className="">
                <NavSidebar />
                <PCHeader />
                <main className="pc-container">
                    <div className="pc-content">
                        <div className="row">
                            {this.props.children}

                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default MainLayout;