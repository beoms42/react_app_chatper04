function Body() {

    function handleOnClick(){
        alert('버튼클릭');
    }

      return (
    <div className="body">
        <button onClick={handleOnClick}>클릭하면.. 알지?</button>
    </div>
  );
}

export default Body;
