const copyToCLipboard = (text: string) => {
    navigator.clipboard.writeText(text);
}

export default copyToCLipboard;