const useRandomNum = () => {
    return (max: number) => Math.floor(Math.random() * max);
}

export default useRandomNum