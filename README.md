# recaptchajs
javascriptだけでrecaptcha(v2)の認証を行えるjsファイルです

使用例
```
<script src="//code.jquery.com/jquery-3.1.1.min.js"></script>
<script src="https://www.google.com/recaptcha/api.js" async defer></script>
<script src="https://lovetwice1012.github.io/recaptcha.js"></script>
<form method="post" enctype="multipart/form-data" id="recapchajs" onsubmit="return false;">
<div class="g-recaptcha" data-sitekey="your site key"></div>
<input id="grecaptchakey" type="hidden" value="your secret api key"></input>
<input type="submit"></input>
</form>
```

# 実装手順
1. htmlファイルに以下のスクリプトタグを挿入し、動作に必要なファイルを読み込んでください。
```
<script src="//code.jquery.com/jquery-3.1.1.min.js"></script>
<script src="https://www.google.com/recaptcha/api.js" async defer></script>
<script src="https://lovetwice1012.github.io/recaptcha.js"></script>
```
2. recaptchaを設置したフォームタグに、`id="recapchajs" onsubmit="return false;"`をつけてください。
※idは変更不可です。(今後変更に対応する可能性があります。)
3. 手順2で指定したコードをつけたフォームタグの終了タグの前に、`<input id="grecaptchakey" type="hidden" value="your secret api key"></input>`を挿入してください。
※「your secret api key」は[ここ](https://www.google.com/recaptcha/admin/)で取得できるシークレットキーに置き換えてください。
4. 最後に、recaptchaを表示したい場所に、`<div class="g-recaptcha" data-sitekey="your site key"></div>`を貼り付けてください。
5. これで設置作業は終了です。

## [重要] このjsファイルはphpなどサーバーサイド言語が使用不可のレンタルサーバーなど、サーバー側でrecaptchaを検証できない際の最終手段として使用してください。少しでも知識がある人はこれを使用してもrecaptcha認証をせずにformの送信を行うことができます。これはあくまで気休め程度にしておいて下さい。
