const userApi = "https://api.github.com/users/";

$(document).ready(function () {
    $(".btn-get").click((e) => {
        e.preventDefault();

        const userVal = $("#user").val().trim();

        if (userVal == "") {
            swal("Sorry ):", "Please Enter Github Username", "error");
        } else {
            getGitCard(userVal);
        }
    });
});

const getGitCard = async (userName) => {
    const userRes = await fetch(userApi + userName);

    const userVal = await userRes.json();

    if (userVal.login == undefined) {
        swal("Oops!", "No such user found", "warning");
    } else {
        swal("Yippee!", "Have a look to your user card", "success");
        $(".git_skeleton").addClass("hide");
        setTimeout(() => {
            gitCard(userVal);
        }, 500);
    }
};

const gitCard = (userDetails) => {
    if (userDetails.name == null && userDetails.bio == null) {
        $("#git_user").html(`
            <div class="git_user">
                <div class="user_name">
                    <a href="${userDetails.html_url}" target="_blank">
                        <span><i class="bx bx-at"></i>${userDetails.login}</span>
                    </a>
                    <img src="${userDetails.avatar_url}" alt="Git Avatar" />
                </div>
                <div class="user_desc">
                    <div class="user_info">
                        <div class="info">
                            <i class="bx bxs-package"></i>
                            <h6>${userDetails.public_repos}<span>Repos</span></h6>
                        </div>
                        <div class="info">
                            <i class="bx bxs-user-detail"></i>
                            <h6>${userDetails.followers}<span>Followers</span></h6>
                        </div>
                        <div class="info">
                            <i class="bx bxs-user-check"></i>
                            <h6>${userDetails.following}<span>Following</span></h6>
                        </div>
                    </div>
                    <span class="bx bxl-github git_logo"></span>
                </div>
                <div class="user_break">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        `);
    } else if (userDetails.name == null) {
        $("#git_user").html(`
            <div class="git_user">
                <div class="user_name">
                    <a href="${userDetails.html_url}" target="_blank">
                        <span><i class="bx bx-at"></i>${userDetails.login}</span>
                        <p>${userDetails.bio}</p>
                    </a>
                    <img src="${userDetails.avatar_url}" alt="Git Avatar" />
                </div>
                <div class="user_desc">
                    <div class="user_info">
                        <div class="info">
                            <i class="bx bxs-package"></i>
                            <h6>${userDetails.public_repos}<span>Repos</span></h6>
                        </div>
                        <div class="info">
                            <i class="bx bxs-user-detail"></i>
                            <h6>${userDetails.followers}<span>Followers</span></h6>
                        </div>
                        <div class="info">
                            <i class="bx bxs-user-check"></i>
                            <h6>${userDetails.following}<span>Following</span></h6>
                        </div>
                    </div>
                    <span class="bx bxl-github git_logo"></span>
                </div>
                <div class="user_break">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        `);
    } else if (userDetails.bio == null) {
        $("#git_user").html(`
            <div class="git_user">
                <div class="user_name">
                    <a href="${userDetails.html_url}" target="_blank">
                        <h4>${userDetails.name}</h4>
                        <span><i class="bx bx-at"></i>${userDetails.login}</span>
                    </a>
                    <img src="${userDetails.avatar_url}" alt="Git Avatar" />
                </div>
                <div class="user_desc">
                    <div class="user_info">
                        <div class="info">
                            <i class="bx bxs-package"></i>
                            <h6>${userDetails.public_repos}<span>Repos</span></h6>
                        </div>
                        <div class="info">
                            <i class="bx bxs-user-detail"></i>
                            <h6>${userDetails.followers}<span>Followers</span></h6>
                        </div>
                        <div class="info">
                            <i class="bx bxs-user-check"></i>
                            <h6>${userDetails.following}<span>Following</span></h6>
                        </div>
                    </div>
                    <span class="bx bxl-github git_logo"></span>
                </div>
                <div class="user_break">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        `);
    } else {
        $("#git_user").html(`
            <div class="git_user">
                <div class="user_name">
                    <a href="${userDetails.html_url}" target="_blank">
                        <h4>${userDetails.name}</h4>
                        <span><i class="bx bx-at"></i>${userDetails.login}</span>
                        <p>${userDetails.bio}</p>
                    </a>
                    <img src="${userDetails.avatar_url}" alt="Git Avatar" />
                </div>
                <div class="user_desc">
                    <div class="user_info">
                        <div class="info">
                            <i class="bx bxs-package"></i>
                            <h6>${userDetails.public_repos}<span>Repos</span></h6>
                        </div>
                        <div class="info">
                            <i class="bx bxs-user-detail"></i>
                            <h6>${userDetails.followers}<span>Followers</span></h6>
                        </div>
                        <div class="info">
                            <i class="bx bxs-user-check"></i>
                            <h6>${userDetails.following}<span>Following</span></h6>
                        </div>
                    </div>
                    <span class="bx bxl-github git_logo"></span>
                </div>
                <div class="user_break">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        `);
    }

    /*
    $("#git_user").html(`
        <div class="git_user">
            <div class="user_name">
                <a href="${userDetails.html_url}" target="_blank">
                    <h4>${userDetails.name}</h4>
                    <span><i class="bx bx-at"></i>${userDetails.login}</span>
                    <p>${userDetails.bio}</p>
                </a>
                <img src="${userDetails.avatar_url}" alt="Git Avatar" />
            </div>
            <div class="user_desc">
                <div class="user_info">
                    <div class="info">
                        <i class="bx bxs-package"></i>
                        <h6>${userDetails.public_repos}<span>Repos</span></h6>
                    </div>
                    <div class="info">
                        <i class="bx bxs-user-detail"></i>
                        <h6>${userDetails.followers}<span>Followers</span></h6>
                    </div>
                    <div class="info">
                        <i class="bx bxs-user-check"></i>
                        <h6>${userDetails.following}<span>Following</span></h6>
                    </div>
                </div>
                <span class="bx bxl-github git_logo"></span>
            </div>
            <div class="user_break">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    `);
    */

    $("#user").val("");
};
