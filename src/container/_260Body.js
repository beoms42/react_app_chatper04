import {useState} from "react";

function _260Body() {

    // const [name, setName] = useState("");
    // const [gender, setGender] = useState("");
    // const [birth, setBirth] = useState("");
    // const [bio, setBio] = useState("");

    const [state, setState] = useState( {
        name : "",
        gender: "",
        birth: "",
        bio: ""
    });

    const handleOnChange = (e) => {
        console.log("수정대상 :", e.target.name);
        console.log("수정값 :", e.target.value);

        setState( {
            ...state,
            [e.target.name]: e.target.value,
        });
    };
        return (
        <div>
            <div>
                <input value={state.name} onChange={handleOnChange} placeholder="이름" />
            </div>

            <div>
                <select value={state.gender} onChange={handleOnChange}>
                    <option key={""}></option>
                    <option key={"남성"}>남성</option>
                    <option key={"여성"}>여성</option>
                </select>
            </div>

            <div>
                <input type="date" value={state.birth} onChange={handleOnChange}/>
            </div>

            <div>
                <textarea value={state.bio} onChange={handleOnChange} />
            </div>

        </div>
  );
}

export default _260Body;
