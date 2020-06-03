//첫번째 인자는 템플릿, 두번째는 정보 객체
export const home = (req, res) =>
    res.render("home", { pageTitle: "Home" });
// export const search = (req, res) =>
//     res.render("search", { pageTitle: "Search" });

export const search = (req, res) => {
    const {
        query: { term: searchingBy }
    } = req;
    res.render("search", { pageTitle: "Search", searchingBy });
};
export const upload = (req, res) =>
    res.render("upload", { pageTitle: "Upload" });
export const videoDetail = (req, res) =>
    res.render("videoDetail", { pageTitle: "Video Detail" });
export const editVideo = (req, res) =>
    res.render("editVideo", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) =>
    res.render("deleteVideo", { pageTitle: "Delete Video" });