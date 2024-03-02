import Pic from "./api.png";
import './api.css';

function API(){
    return(
        <>
        <div className="api-box">
            <p className="api-info">API is located in the <b>Backend</b> folder.<br/> 
            Open the <b>.sln</b> file and modify the connection string located in <b>appsettings.json</b>.<br/>
            Get your SQL Server name and change the <b>Server</b> to equal your Server name (ex. "Server=Ivan\\SQLEXPRESS").<br/>
            Then open <b>Package Manager Console <i>(Tools{">"}Nuget Package Manager{">"}Package Manager Console)</i></b>. <br/>
            In the Package Manager Console enter <b>update-database</b>. This will create the database on your machine.<br/>
            Now you can start the API by using the <b>green button</b> or pressing <b>F5</b>. <br />
            Once the API is running, you won't have any records so start by creating some <b><a href="/" className="home-link">here</a></b>.
            </p>
            <img className="api-img" src={Pic}></img>
        </div>
        </>
    );
}

export default API;