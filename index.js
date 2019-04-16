<script type="text/javascript">
/*
Author: Osman Çakmak
Skype: oxcakmak
Email: oxcakmak@hotmail.com
Website: http://oxcakmak.com/
Country: Turkey [TR]
*/
/*
https://github.com/oxcakmak/PHP-Secure-File-Upload
*/
CKEDITOR.replace("postContent");
$(".actionAddPost").click(function(e){
    e.preventDefault();
    var formData = new FormData();
    formData.append("postTitle", $("#postTitle").val());
    formData.append("postThumbnail", $("#postThumbnail").prop("files")[0]);
    formData.append("postContent", CKEDITOR.instances.postContent.getData());
    formData.append("actionAddPost", "actionAddPost");
    $.ajax({
        type: "POST",
        url: "'.$config['base_url'].'Action",
        cache: false,
        contentType: false,
        processData: false,
        data: formData,
        success: function(response){
            if($.trim(response) == "space"){
                //If it is empty
            }else if($.trim(response) == "extension"){
                //If the loaded file extension is not equal to one of the elements in the array
            }else if($.trim(response) == "limit"){
                //If the uploaded file size is large
            }else if($.trim(response) == "success"){
                //If successful
            }
        }
    });
});
</script>
