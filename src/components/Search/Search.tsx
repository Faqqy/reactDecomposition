import SearchTabs from "./SearchTabs";
import SearchForm from "./SearchForm";
import LogoSearch from "./LogoSearch";
import LogoImg from "../../assets/ya.png";

export default function Search () {

    return (
        <>
        <div className="searchBlock">
            <div className="searchBlock--img">
                <LogoSearch img={LogoImg}/>
            </div>
            <div className="searchBlock--tabs-form">
                <SearchTabs />
                <SearchForm />
            </div>
        </div>
        </>
    )
}