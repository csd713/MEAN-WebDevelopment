/**
 * Created by csd on 6/5/17.
 */
(function () {
    angular.module('BlogApp', [])
        .controller('BlogController', blogController)


    function blogController($scope) {

        $scope.blogPosts = [];

        //Event handlers
        $scope.addPost = addPost;
        $scope.deletePost = deletePost;
        $scope.selectPost = selectPost;
        $scope.updatePost = updatePost;


        function addPost (post) {
            var newPost = {
                title: post.title,
                content: post.content,
                date: new Date()
            };

            $scope.blogPosts.push(newPost);
        };

        function deletePost(index){
            $scope.blogPosts.splice(index,1);
        }

        function selectPost(index) {
            $scope.post = angular.copy($scope.blogPosts[index]);
            $scope.index = index;

        }

        function updatePost(post) {
            $scope.blogPosts[$scope.index] = angular.copy(post);

        }
    }
})();
