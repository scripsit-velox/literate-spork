$(document).ready(function() {
    $('.selall').click(function() {
        /*$('.nil-box').prop('checked', $(this).prop('checked'));*/
        $(this).closest('tr').find(".kana-box").prop('checked', this.checked);
        });
    /*$('.selall-k').click(function() {
        $('.k-box').prop('checked', $(this).prop('checked'));
        });
    $('.selall-s').click(function() {
        $('.s-box').prop('checked', $(this).prop('checked'));
        });
    $('.selall-t').click(function() {
        $('.t-box').prop('checked', $(this).prop('checked'));
        });
    $('.selall-n').click(function() {
        $('.n-box').prop('checked', $(this).prop('checked'));
        });
    $('.selall-h').click(function() {
        $('.h-box').prop('checked', $(this).prop('checked'));
        });
    $('.selall-m').click(function() {
        $('.m-box').prop('checked', $(this).prop('checked'));
        });
    $('.selall-y').click(function() {
        $('.y-box').prop('checked', $(this).prop('checked'));
        });
    $('.selall-r').click(function() {
        $('.r-box').prop('checked', $(this).prop('checked'));
        });
    $('.selall-w').click(function() {
        $('.w-box').prop('checked', $(this).prop('checked'));
        });
    $('.selall-g').click(function() {
        $('.g-box').prop('checked', $(this).prop('checked'));
        });
    $('.selall-z').click(function() {
        $('.z-box').prop('checked', $(this).prop('checked'));
        });
    $('.selall-d').click(function() {
        $('.d-box').prop('checked', $(this).prop('checked'));
        });
    $('.selall-b').click(function() {
        $('.b-box').prop('checked', $(this).prop('checked'));
        });
    $('.selall-p').click(function() {
        $('.p-box').prop('checked', $(this).prop('checked'));
        });
    $('.selall-v').click(function() {
        $('.v-box').prop('checked', $(this).prop('checked'));
        });*/
    $('.selevery').click(function() {
        $('.').prop('checked', $(this).prop('checked'));
        });
});