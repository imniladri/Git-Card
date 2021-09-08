const userApi = "https://api.github.com/users/";
const repoApi = "https://api.github.com/repos/";

$(document).ready(function () {
    $(".btn-get").click((e) => {
        e.preventDefault();

        const userVal = $("#user").val().trim();
        const repoVal = $("#repo").val().trim();

        if (userVal == "") {
            swal("Sorry ):", "Please Enter Github Username", "error");
        } else {
            if (repoVal == "") {
                swal("Now!", "Please Enter Github Repository", "error");
            } else {
                getGitCard(userVal, repoVal);
            }
        }
    });
});

const getGitCard = async (userName, repoName) => {
    const userRes = await fetch(userApi + userName);
    const repoRes = await fetch(repoApi + userName + "/" + repoName);

    const userVal = await userRes.json();
    const repoVal = await repoRes.json();

    if (userVal.login == undefined) {
        swal("Oops!", "No such user found", "warning");
    } else {
        if (repoVal.name == undefined) {
            swal("Oops!", `No such repo found for ${userName}`, "warning");
        } else {
            swal("Yippee!", "Have a look to your repo card", "success");
            $(".git_skeleton").addClass("hide");
            setTimeout(() => {
                gitCard(repoVal);
            }, 500);
        }
    }
};

const gitCard = (repoDetails) => {
    $("#git_repo").html(`
        <div class="git_repo">
            <div class="repo_name">
                <a href="${repoDetails.html_url}" target="_blank">
                    <h4>${repoDetails.owner.login}/<span>${repoDetails.name}</span></h4>
                    <p>${repoDetails.description}</p>
                </a>
                <img src="${repoDetails.owner.avatar_url}" alt="Git Avatar" />
            </div>
            <div class="repo_desc">
                <div class="repo_info">
                    <div class="info">
                        <i class="bx bx-star"></i>
                        <h6>${repoDetails.stargazers_count}<span>Stars</span></h6>
                    </div>
                    <div class="info">
                        <i class="bx bx-git-repo-forked"></i>
                        <h6>${repoDetails.forks}<span>Forks</span></h6>
                    </div>
                    <div class="info">
                        <i class="bx bx-bug"></i>
                        <h6>${repoDetails.open_issues}<span>Issues</span></h6>
                    </div>
                </div>
                <span class="bx bxl-github git_logo"></span>
            </div>
            <div class="repo_break">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    `);

    $("#user").val("");
    $("#repo").val("");
};
