const body = document.querySelector('body');

fetch('data.json')
    .then(res => res.json())
    .then(data => {
        const firstImg = document.querySelector('.first-img');
        const firstUsername = document.querySelector('.first-username');
        const firstMainText = document.querySelector('.first-main-text');
        const firstTime = document.querySelector('.first-time');
        const firstScore = document.querySelector('.first-score');
        const secondUsername = document.querySelector('.second-username');
        const secondMainText = document.querySelector('.second-main-text');
        const secondTime = document.querySelector('.second-time');
        const secondScore = document.querySelector('.second-score');
        const secondImg = document.querySelector('.second-img');
        const firstReplyImg = document.querySelector('.first-reply-img');
        const firstReplyUsername = document.querySelector('.first-reply-username');
        const firstReplyTime = document.querySelector('.first-reply-time');
        const firstReplyMainText = document.querySelector('.first-reply-main-text');
        const firstReplyTo = document.querySelector('.first-reply-to');
        const firstReplyScore = document.querySelector('.first-reply-score');
        const secondReplyImg = document.querySelector('.second-reply-img');
        const secondReplyUsername = document.querySelector('.second-reply-username');
        const secondReplyTime = document.querySelector('.second-reply-time');
        const secondReplyMainText = document.querySelector('.second-reply-main-text');
        const secondReplyTo = document.querySelector('.second-reply-to');
        const secondReplyScore = document.querySelector('.second-reply-score');
        const userImg = document.querySelector('.user-img');
        const plusImg = document.querySelector('.plus-img');
        const reply = document.querySelector('.reply');

        firstTime.textContent = `${data.comments[0].createdAt}`;
        firstMainText.textContent = `${data.comments[0].content}`;
        firstUsername.textContent = `${data.comments[0].user.username}`;
        firstScore.textContent = `${data.comments[0].score}`;
        firstImg.src = `${data.comments[0].user.image.png}`;

        secondTime.textContent = `${data.comments[1].createdAt}`;
        secondMainText.textContent = `${data.comments[1].content}`;
        secondUsername.textContent = `${data.comments[1].user.username}`;
        secondScore.textContent = `${data.comments[1].score}`;
        secondImg.src = `${data.comments[1].user.image.png}`;

        firstReplyImg.src = `${data.comments[1].replies[0].user.image.png}`;
        firstReplyUsername.textContent = `${data.comments[1].replies[0].user.username}`;
        firstReplyTime.textContent = `${data.comments[1].replies[0].createdAt}`;
        firstReplyTo.textContent = `@${data.comments[1].replies[0].replyingTo}`;
        firstReplyMainText.innerHTML = `<span class="reply-to first-reply-to">@maxblagun</span> ${data.comments[1].replies[0].content}`;
        firstReplyScore.textContent = `${data.comments[1].replies[0].score}`;

        secondReplyImg.src = `${data.comments[1].replies[1].user.image.png}`;
        secondReplyUsername.textContent = `${data.comments[1].replies[1].user.username}`;
        secondReplyTime.textContent = `${data.comments[1].replies[1].createdAt}`;
        secondReplyTo.textContent = `@${data.comments[1].replies[1].replyingTo}`;
        secondReplyMainText.innerHTML = `<span class="reply-to second-reply-to">@ramsesmiron</span> ${data.comments[1].replies[1].content}`;
        secondReplyScore.textContent = `${data.comments[1].replies[1].score}`;
        userImg.src = `${data.comments[1].replies[1].user.image.png}`;

        let plus = document.querySelector('.plus');
        let minus = document.querySelector('.minus');
        let counter1 = document.querySelector('.counter-1');

        let plus2 = document.querySelector('.plus-2');
        let minus2 = document.querySelector('.minus-2');
        let counter2 = document.querySelector('.counter-2');

        let plus3 = document.querySelector('.plus-3');
        let minus3 = document.querySelector('.minus-3');
        let counter3 = document.querySelector('.counter-3');

        let plus4 = document.querySelector('.plus-4');
        let minus4 = document.querySelector('.minus-4');
        let counter4 = document.querySelector('.counter-4');

        plus.addEventListener('click', addScore);
        minus.addEventListener('click', subtractScore);
        plus2.addEventListener('click', addScore2);
        minus2.addEventListener('click', subtractScore2);
        plus3.addEventListener('click', addScore3);
        minus3.addEventListener('click', subtractScore3);
        plus4.addEventListener('click', addScore4);
        minus4.addEventListener('click', subtractScore4);

        function addScore2(){
            counter2.innerHTML = `${data.comments[1].score + 1}`;
            plusImg.style.color = 'hsl(212, 24%, 26%)';
        }

        function subtractScore2(){
            counter2.innerHTML = `${data.comments[1].score - 1}`;
        }

        function addScore3(){
            counter3.innerHTML = `${data.comments[1].replies[0].score + 1}`;
        }

        function subtractScore3(){
            counter3.innerHTML = `${data.comments[1].replies[0].score - 1}`;
        }

        function addScore4(){
            counter4.innerHTML = `${data.comments[1].replies[1].score + 1}`;
        }

        function subtractScore4(){
            counter4.innerHTML = `${data.comments[1].replies[1].score - 1}`;
        }

        function addScore(){
            counter1.innerHTML = data.comments[0].score + 1;
        }

        function subtractScore(){
            counter1.innerHTML = data.comments[0].score - 1;
        }

        let deleteModal = document.querySelector('.delete-modal');
        let deleteBtn = document.querySelector('.delete');
        let edit = document.querySelector('.edit');
        let cancel = document.querySelector('.cancel');
        let modal = document.querySelector('.modal');
        let modal1 = document.querySelector('.modal-1');
        let modal2 = document.querySelector('.modal-2');
        let modal3 = document.querySelector('.modal-3');
        let modal4 = document.querySelector('.modal-4');
        let wrapper = document.querySelector('.wrapper');
        let sendBtn = document.querySelector('.send');
        let updateBtn = document.querySelector('.update-btn');

        let updateBtn1 = document.createElement('button');
        let updateBtn2 = document.createElement('button');
        let updateBtn3 = document.createElement('button');
        let updateBtn4 = document.createElement('button');
        updateBtn1.classList.add('update-btn');
        updateBtn1.classList.add('first-update-btn');
        updateBtn2.classList.add('update-btn');
        updateBtn2.classList.add('second-update-btn');
        updateBtn3.classList.add('update-btn');
        updateBtn3.classList.add('third-update-btn');
        updateBtn4.classList.add('update-btn');
        updateBtn4.classList.add('fourth-update-btn');

        let cancel1 = document.querySelector('.cancel-1');
        let cancel2 = document.querySelector('.cancel-2');
        let cancel3 = document.querySelector('.cancel-3');
        let cancel4 = document.querySelector('.cancel-4');
        let delete1 = document.querySelector('.delete-1');
        let delete2 = document.querySelector('.delete-2');
        let delete3 = document.querySelector('.delete-3');
        let delete4 = document.querySelector('.delete-4');

        edit.addEventListener('click', editComment);
        cancel.addEventListener('click', closeModal);
        deleteBtn.addEventListener('click', deleteComment);
        deleteModal.addEventListener('click', openDeleteModal);
        sendBtn.addEventListener('click', attachComment, {once:true});
        cancel1.addEventListener('click', closeModal1);
        cancel2.addEventListener('click', closeModal2);
        cancel3.addEventListener('click', closeModal3);
        cancel4.addEventListener('click', closeModal4);
        delete1.addEventListener('click', deleteComment1);
        delete2.addEventListener('click', deleteComment2);
        delete3.addEventListener('click', deleteComment3);
        delete4.addEventListener('click', deleteComment4);
        updateBtn.addEventListener('click', updateComment);
        updateBtn1.addEventListener('click', updateComment1);
        updateBtn2.addEventListener('click', updateComment2);
        updateBtn3.addEventListener('click', updateComment3);
        updateBtn4.addEventListener('click', updateComment4);

        let firstReply = document.querySelector('.first-reply');

        function deleteComment1(){
            deleteDiv1.parentElement.remove();
            modal1.style.display = 'none';
            firstReply.textContent = '';
        }

        function deleteComment2(){
            deleteDiv2.parentElement.remove();
            modal2.style.display = 'none';
        }

        function deleteComment3(){
            deleteDiv3.parentElement.remove();
            modal3.style.display = 'none';
        }

        function deleteComment4(){
            deleteDiv4.parentElement.remove();
            modal4.style.display = 'none';
        }

        let textarea1 = document.createElement('textarea');
        let secondReplyy = document.querySelector('.second-reply');
        let commentHeader2 = document.querySelector('.second-comment-header');

        let mainText2 = document.createElement('p');

        function editComment(){
            textarea1.classList.add('textarea-1');
            let secondReplyMainText = document.querySelector('.second-reply-main-text');
            let commentHeader = document.createElement('div');
            secondReplyMainText.classList.add('main-text');
            commentHeader.classList.add('second-comment-header');
            secondReplyy.appendChild(textarea1);
            secondReplyMainText.style.display = 'none';
            edit.style.display = 'none';
            updateBtn.style.display = 'inline';
            mainText2.style.display = 'none';
            textarea1.style.display = 'inline';
            commentHeader2.after(textarea1);
        }

        function updateComment(){      
            mainText2.classList.add('main-text');
            mainText2.textContent = textarea1.value;
            secondReplyy.appendChild(mainText2);
            textarea1.style.display = 'none';
            updateBtn.style.display = 'none';
            edit.style.display = 'flex';
            mainText2.style.display = 'block';
            commentHeader2.after(mainText2);
        }

        function openDeleteModal(){
            modal.style.display = 'block';
        }

        function deleteComment(){
            deleteModal.parentElement.remove();
            modal.style.display = 'none';
        }

        function closeModal(){
            modal.style.display = 'none';
            textarea2.textContent = '';
        }

        function closeModal1(){
            modal1.style.display = 'none';
            textarea2.textContent = '';
        }

        function closeModal2(){
            modal2.style.display = 'none';
            textarea2.textContent = '';
        }

        function closeModal3(){
            modal3.style.display = 'none';
            textarea2.textContent = '';
        }

        function closeModal4(){
            modal4.style.display = 'none';
            textarea2.textContent = '';
        }

        window.onclick = function(event) {
        if (event.target == modal) {
                modal.style.display = "none";
            }
        }

        // Create reply comment
        reply.addEventListener('click', createComment);
        let reply2 = document.querySelector('.reply-2');
        let reply3 = document.querySelector('.reply-3');
        reply2.addEventListener('click', createComment2);
        reply3.addEventListener('click', createComment3);
        let send = document.createElement('button');
        send.classList.add('send');
        send.textContent = 'Send';
        let p = document.createElement('p');
        let comment = document.createElement('div');
        comment.classList.add('first-comment-reply');
        let textarea2 = document.createElement('textarea');
        textarea2.classList.add('textarea-2');
        let userTime = document.createElement('p');
        let userName = document.createElement('p');
        let repliedUserImg = document.createElement('img');
        let userRepliedText = document.createElement('span');
        let commentHeader = document.createElement('div');
        let cancelText = document.createElement('p');
        let commentHeader3 = document.createElement('div');
        let commentHeader4 = document.createElement('div');
        let repliedUserImg2 = document.createElement('img');
        let repliedUserImg3 = document.createElement('img');
        let userName2 = document.createElement('p');
        let userName3 = document.createElement('p');
        let userTime2 = document.createElement('p');
        let userTime3 = document.createElement('p');
        let userRepliedText2 = document.createElement('span');
        let userRepliedText3 = document.createElement('span');

        repliedUserImg.src = `${data.currentUser.image.png}`;
        repliedUserImg2.src = `${data.currentUser.image.png}`;
        repliedUserImg3.src = `${data.currentUser.image.png}`;

        cancelText.addEventListener('click', deleteDraft);
        send.addEventListener('click', postComment);

        function deleteDraft(){
            cancelText.parentElement.remove();
            textarea2.value = '';
        }

        let deleteDiv1 = document.createElement('div');
        let editDiv1 = document.createElement('div');
        deleteDiv1.classList.add('delete-modal');
        deleteDiv1.classList.add('delete-modal-1');
        editDiv1.classList.add('edit');
        editDiv1.classList.add('edit-1');

        deleteDiv1.addEventListener('click', openDeleteModal1);
        function openDeleteModal1(){
            modal1.style.display = 'block';
        }

        editDiv1.addEventListener('click', editComment1);

        let comment1 = document.createElement('div');
        comment1.classList.add('comment');

        let commentReplyHeader = document.createElement('div');
        commentReplyHeader.classList.add('first-reply-header');
        function editComment1(){
            updateBtn1.textContent = 'Update';
            comment.appendChild(textarea2);
            comment.appendChild(updateBtn1);
            editDiv1.style.display = 'none';
            updateBtn1.style.display = 'inline';
            p.style.display = 'none';
            textarea2.style.display = 'inline';
            commentReplyHeader.after(textarea2);
            textarea2.after(deleteDiv1);
        }

        function updateComment1(){      
            p.classList.add('main-text');
            p.textContent = textarea2.value;
            comment.appendChild(p);
            textarea2.style.display = 'none';
            updateBtn1.style.display = 'none';
            editDiv1.style.display = 'flex';
            p.style.display = 'block';
            commentReplyHeader.after(p);
            p.after(editDiv1);
            p.after(deleteDiv1);
        }

        function createComment() {
            let replies = document.createElement('div');
            let commentWrap1 = document.querySelector('.comment-wrap-1');
            cancelText.classList.add('cancel-text');
            cancelText.textContent = 'Cancel';
            replies.classList.add('replies');
            textarea2.placeholder = 'Add a comment...';
            comment.appendChild(textarea2);
            comment.appendChild(send);
            comment.appendChild(cancelText);
            repliedUserImg.classList.add('user-img');
            comment.appendChild(repliedUserImg);
            comment.classList.add('comment');
            replies.appendChild(comment);       
            commentWrap1.appendChild(replies);
        }

        function postComment(){
            p.textContent = textarea2.value;
            p.classList.add('main-text');
            p.classList.add('first-reply');
            textarea2.style.display = 'none';
            userTime.textContent = 'Just Now';
            userTime.classList.add('time');
            userName.classList.add('username');
            commentHeader.classList.add('comment-header');
            commentHeader.classList.add('first-reply-header');
            repliedUserImg.classList.add('first-img');
            repliedUserImg.classList.remove('user-img');
            userRepliedText.classList.add('user-replied');
            userRepliedText.textContent = 'you';
            commentHeader.appendChild(repliedUserImg);
            commentHeader.appendChild(userName);
            commentHeader.appendChild(userRepliedText);
            commentHeader.appendChild(userTime);
            comment.appendChild(commentHeader);
            comment.appendChild(p);
            userName.textContent = `${data.currentUser.username}`;
            send.style.display = 'none';
            cancelText.style.display = 'none';
            let editText = document.createElement('p');
            let deleteText = document.createElement('p');
            let deleteImg = document.createElement('img');
            let editImg = document.createElement('img');
            editText.classList.add('edit-text');
            deleteText.classList.add('delete-text');
            editImg.classList.add('edit-icn');
            deleteImg.classList.add('delete-icn');
            deleteImg.src = 'images/icon-delete.svg';
            editImg.src = 'images/icon-edit.svg';
            editText.textContent = 'Edit';
            deleteText.textContent = 'Delete';
            editDiv1.appendChild(editImg);
            editDiv1.appendChild(editText);
            deleteDiv1.appendChild(deleteImg);
            deleteDiv1.appendChild(deleteText);
            comment.appendChild(deleteDiv1);
            comment.appendChild(editDiv1);
        }

        let send2 = document.createElement('button');
        let cancelText2 = document.createElement('p');
        send2.classList.add('send');
        send2.classList.add('send-2');
        send2.textContent = 'Send';
        send2.addEventListener('click', postComment2);

        cancelText2.addEventListener('click', deleteDraft2);

        function deleteDraft2(){
            cancelText2.parentElement.remove();
            textarea4.value = '';
        }

        let textarea4 = document.createElement('textarea');
        let comment2 = document.createElement('div');

        let deleteDiv2 = document.createElement('div');
        let editDiv2 = document.createElement('div');
        deleteDiv2.classList.add('delete-modal');
        deleteDiv2.classList.add('delete-modal-2');
        editDiv2.classList.add('edit');
        editDiv2.classList.add('edit-2');

        editDiv2.addEventListener('click', editComment2);
        deleteDiv2.addEventListener('click', openDeleteModal2);
        function openDeleteModal2(){
            modal2.style.display = 'block';
        }

        function createComment2(){
            let replies = document.createElement('div');
            let commentWrap2 = document.querySelector('.comment-wrap-2');
            textarea4.classList.add('textarea-4');
            cancelText2.classList.add('cancel-text');
            cancelText2.textContent = 'Cancel';
            replies.classList.add('replies');
            textarea4.placeholder = 'Add a comment...';
            comment2.appendChild(textarea4);
            comment2.appendChild(send2);
            comment2.appendChild(cancelText2);
            repliedUserImg2.classList.add('user-img');
            comment2.appendChild(repliedUserImg2);
            comment2.classList.add('comment');
            replies.appendChild(comment2);       
            commentWrap2.appendChild(replies);
        }

        let p2 = document.createElement('p');
        function postComment2(){
            p2.textContent = textarea4.value;
            p2.classList.add('main-text');
            textarea4.style.display = 'none';
            userTime2.textContent = 'Just Now';
            userTime2.classList.add('time');
            userName2.classList.add('username');
            commentHeader3.classList.add('comment-header');
            commentHeader3.classList.add('second-reply-header');
            commentHeader.classList.add('comment-header');
            repliedUserImg2.classList.add('first-img');
            repliedUserImg2.classList.remove('user-img');
            userRepliedText2.classList.add('user-replied');
            userRepliedText2.textContent = 'you';
            commentHeader3.appendChild(repliedUserImg2);
            commentHeader3.appendChild(userName2);
            commentHeader3.appendChild(userRepliedText2);
            commentHeader3.appendChild(userTime2);
            comment2.appendChild(commentHeader3);
            comment2.appendChild(p2);
            userName2.textContent = `${data.currentUser.username}`;
            send2.style.display = 'none';
            cancelText2.style.display = 'none';
            let editText2 = document.createElement('p');
            let deleteText2 = document.createElement('p');
            let deleteImg2 = document.createElement('img');
            let editImg2 = document.createElement('img');
            editText2.classList.add('edit-text');
            deleteText2.classList.add('delete-text');
            editImg2.classList.add('edit-icn');
            deleteImg2.classList.add('delete-icn');
            deleteImg2.src = 'images/icon-delete.svg';
            editImg2.src = 'images/icon-edit.svg';
            editText2.textContent = 'Edit';
            deleteText2.textContent = 'Delete';
            editDiv2.appendChild(editImg2);
            editDiv2.appendChild(editText2);
            deleteDiv2.appendChild(deleteImg2);
            deleteDiv2.appendChild(deleteText2);
            comment2.appendChild(deleteDiv2);
            comment2.appendChild(editDiv2);
        }

        let commentReplyHeader2 = document.createElement('div');
        commentReplyHeader2.classList.add('second-reply-header');
        function editComment2(){
            p2.classList.add('main-text');
            updateBtn2.textContent = 'Update';
            comment2.appendChild(textarea4);
            comment2.appendChild(updateBtn2);
            editDiv2.style.display = 'none';
            updateBtn2.style.display = 'inline';
            p2.style.display = 'none';
            textarea4.style.display = 'inline';
            commentReplyHeader2.after(textarea4);
            textarea4.after(deleteDiv2);
        }

        function updateComment2(){      
            p2.classList.add('main-text');
            p2.textContent = textarea4.value;
            comment2.appendChild(p2);
            textarea4.style.display = 'none';
            updateBtn2.style.display = 'none';
            editDiv2.style.display = 'flex';
            p2.style.display = 'block';
            commentReplyHeader2.after(p2);
            p2.after(editDiv2);
            p2.after(deleteDiv2);
        }

        let textarea5 = document.createElement('textarea');
        let cancelText3 = document.createElement('p');
        let comment3 = document.createElement('div');
        let send3 = document.createElement('button');
        send3.classList.add('send');
        send3.classList.add('send-3');
        send3.textContent = 'Send';
        send3.addEventListener('click', postComment3);
        cancelText3.addEventListener('click', deleteDraft3);

        function deleteDraft3(){
            cancelText3.parentElement.remove();
            textarea5.value = '';
        }

        let deleteDiv3 = document.createElement('div');
        let editDiv3 = document.createElement('div');
        deleteDiv3.classList.add('delete-modal-3');
        deleteDiv3.classList.add('delete-modal');
        editDiv3.classList.add('edit');
        editDiv3.classList.add('edit-3');

        editDiv3.addEventListener('click', editComment3);
        deleteDiv3.addEventListener('click', openDeleteModal3);
        function openDeleteModal3(){
            modal3.style.display = 'block';
        }

        function createComment3(){
            let replies = document.createElement('div');
            let commentWrap3 = document.querySelector('.comment-wrap-3');
            textarea5.classList.add('textarea-5');
            cancelText3.classList.add('cancel-text');
            cancelText3.textContent = 'Cancel';
            replies.classList.add('replies');
            textarea5.placeholder = 'Add a comment...';
            comment3.appendChild(textarea5);
            comment3.appendChild(send3);
            comment3.appendChild(cancelText3);
            repliedUserImg3.classList.add('user-img');
            comment3.appendChild(repliedUserImg3);
            comment3.classList.add('comment');
            commentWrap3.appendChild(comment3);
            repliedUserImg3.classList.add('first-img');
        }

        let p3 = document.createElement('p');
        function postComment3(){
            p3.textContent = textarea5.value;
            p3.classList.add('main-text');
            textarea5.style.display = 'none';
            userTime3.textContent = 'Just Now';
            userTime3.classList.add('time');
            userName3.classList.add('username');
            commentHeader4.classList.add('comment-header');
            commentHeader4.classList.add('third-reply-header');
            commentHeader.classList.add('comment-header');
            repliedUserImg3.classList.add('first-img');
            repliedUserImg3.classList.remove('user-img');
            userRepliedText3.classList.add('user-replied');
            userRepliedText3.textContent = 'you';
            commentHeader4.appendChild(repliedUserImg3);
            commentHeader4.appendChild(userName3);
            commentHeader4.appendChild(userRepliedText3);
            commentHeader4.appendChild(userTime3);
            comment3.appendChild(commentHeader4);
            comment3.appendChild(p3);
            userName3.textContent = `${data.currentUser.username}`;
            send3.style.display = 'none';
            cancelText3.style.display = 'none';
            let editText3 = document.createElement('p');
            let deleteText3 = document.createElement('p');
            let deleteImg3 = document.createElement('img');
            let editImg3 = document.createElement('img');
            editText3.classList.add('edit-text');
            deleteText3.classList.add('delete-text');
            editImg3.classList.add('edit-icn');
            deleteImg3.classList.add('delete-icn');
            deleteImg3.src = 'images/icon-delete.svg';
            editImg3.src = 'images/icon-edit.svg';
            editText3.textContent = 'Edit';
            deleteText3.textContent = 'Delete';
            deleteDiv3.appendChild(deleteImg3);
            deleteDiv3.appendChild(deleteText3);
            editDiv3.appendChild(editImg3);
            editDiv3.appendChild(editText3);
            comment3.appendChild(deleteDiv3);
            comment3.appendChild(editDiv3);
        }

        let commentReplyHeader3 = document.createElement('div');
        commentReplyHeader3.classList.add('third-reply-header');
        function editComment3(){
            p3.classList.add('main-text');
            updateBtn3.textContent = 'Update';
            comment3.appendChild(textarea5);
            comment3.appendChild(updateBtn3);
            editDiv3.style.display = 'none';
            updateBtn3.style.display = 'inline';
            p3.style.display = 'none';
            textarea5.style.display = 'inline';
            commentReplyHeader3.after(textarea5);
            textarea5.after(deleteDiv3);
        }

        function updateComment3(){      
            p3.classList.add('main-text');
            p3.textContent = textarea5.value;
            comment3.appendChild(p3);
            textarea5.style.display = 'none';
            updateBtn3.style.display = 'none';
            editDiv3.style.display = 'flex';
            p3.style.display = 'block';
            commentReplyHeader3.after(p3);
            p3.after(editDiv3);
            p3.after(deleteDiv3);
        }

        let deleteDiv4 = document.createElement('div');
        let editDiv4 = document.createElement('div');

        deleteDiv4.addEventListener('click', openDeleteModal4);
        editDiv4.addEventListener('click', editComment4);

        function openDeleteModal4(){
            modal4.style.display = 'block';
        }

        let paragraph = document.createElement('p');
        let textarea3 = document.querySelector('.textarea-3');
        let textarea6 = document.createElement('textarea');
        textarea6.classList.add('textarea-6');
        let commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        let commentReplyHeader4 = document.createElement('div');
        commentReplyHeader4.classList.add('attached-comment-header');
        commentReplyHeader4.classList.add('first-reply-header');
        deleteDiv4.classList.add('delete-modal-4');
        deleteDiv4.classList.add('delete-modal');
        editDiv4.classList.add('edit');
        editDiv4.classList.add('edit-4');

        function editComment4(){
            paragraph.classList.add('main-text');
            updateBtn4.textContent = 'Update';
            commentDiv.appendChild(textarea6);
            commentDiv.appendChild(updateBtn4);
            editDiv4.style.display = 'none';
            updateBtn4.style.display = 'inline';
            paragraph.style.display = 'none';
            textarea6.style.display = 'inline';
            commentReplyHeader4.after(textarea6);
            textarea6.after(deleteDiv4);
        }

        function updateComment4(){      
            paragraph.classList.add('main-text');
            paragraph.textContent = textarea6.value;
            commentDiv.appendChild(paragraph);
            textarea6.style.display = 'none';
            updateBtn4.style.display = 'none';
            editDiv4.style.display = 'flex';
            paragraph.style.display = 'block';
            commentReplyHeader4.after(paragraph);
            paragraph.after(editDiv4);
            paragraph.after(deleteDiv4);
        }

        let userResponse = document.querySelector('.user-response');

        function attachComment(){
            let img2 = document.createElement('img');
            let username = document.createElement('p');
            let commentHeader = document.createElement('div');
            let userRepliedText = document.createElement('span');
            let userTime = document.createElement('p'); 
            let editText4 = document.createElement('p');
            let deleteText4 = document.createElement('p');
            let deleteImg4 = document.createElement('img');
            let editImg4 = document.createElement('img');
            editText4.classList.add('edit-text');
            deleteText4.classList.add('delete-text');
            editImg4.classList.add('edit-icn');
            deleteImg4.classList.add('delete-icn');
            deleteImg4.src = 'images/icon-delete.svg';
            editImg4.src = 'images/icon-edit.svg';
            editText4.textContent = 'Edit';
            deleteText4.textContent = 'Delete';
            userTime.textContent = 'Just Now';
            userTime.classList.add('time');
            userRepliedText.classList.add('user-replied');
            userRepliedText.textContent = 'you';
            commentHeader.classList.add('comment-header');
            commentHeader.classList.add('attached-comment-header');
            username.classList.add('username');
            username.textContent = `${data.currentUser.username}`;
            paragraph.classList.add('main-text');
            paragraph.textContent = textarea3.value;
            img2.classList.add('first-img');
            img2.src = `${data.currentUser.image.png}`;
            editDiv4.appendChild(editImg4);
            editDiv4.appendChild(editText4);
            deleteDiv4.appendChild(deleteImg4);
            deleteDiv4.appendChild(deleteText4);
            commentHeader.appendChild(img2);
            commentHeader.appendChild(username);
            commentHeader.appendChild(userRepliedText);
            commentHeader.appendChild(userTime);
            commentDiv.appendChild(commentHeader);
            commentDiv.appendChild(paragraph);
            commentDiv.appendChild(deleteDiv4);
            commentDiv.appendChild(editDiv4);
            wrapper.appendChild(commentDiv);
            textarea3.value = '';
            userResponse.style.display = 'none';
        }
    })