<template>
  <div class="sample">
    <h1>页面结构实例</h1>
    <!-- <ol>
      <li v-for="k in item">{{k ? k : '--'}}</li>
  </ol> -->

    <quill-editor ref="myTextEditor"
                  v-model="content"
                  :options="editorOption"
                  @blur="onEditorBlur($event)"
                  @focus="onEditorFocus($event)"
                  @ready="onEditorReady($event)">
    </quill-editor>
    
</div>
</template>

<script>
import model from 'model/sample/sample'
import {mapState,mapGetters} from 'vuex'




export default {
    name: 'HelloWorld',
    data () {
        return {
            name: '01-example',
            content: `<h2 class="ql-align-center"><span class="ql-font-serif">Text content loading..</span></h2>`,
            editorOption: {
              modules: {
                toolbar: [
                  ['bold', 'italic', 'underline', 'strike'],
                  ['blockquote', 'code-block'],
                  [{ 'header': 1 }, { 'header': 2 }],
                  [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                  [{ 'script': 'sub' }, { 'script': 'super' }],
                  [{ 'indent': '-1' }, { 'indent': '+1' }],
                  [{ 'direction': 'rtl' }],
                  [{ 'size': ['small', false, 'large', 'huge'] }],
                  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                  [{ 'font': [] }],
                  [{ 'color': [] }, { 'background': [] }],
                  [{ 'align': [] }],
                  ['clean'],
                  ['link', 'image', 'video']
                ]
              }
            },
            msg: 'Welcome to Your Vue.js App',
            item: {}
      }
    },
    created() {
        this.getData();
        console.log("mapState= token =",this.token);
        console.log("mapGetters= isLogin =",this.isLogin);
    },
    mounted() {
        console.log('this is my editor', this.editor)
    },
    computed: {
        editor() {
            return this.$refs.myTextEditor.quill
        },
        ...mapState({
            token: ({ login }) => login.token
        }),
        ...mapGetters([
            'isLogin',
        ])
    },
    methods: {
        getData() {
            let data = {
                userId: '32'
            }

            model.getSample(data,(res => {
                console.log("sample====", res);
                this.item = res;
            }));
        },

        onEditorBlur(editor) {
            console.log('editor blur!', editor.container)
        },
        onEditorFocus(editor) {
            console.log('editor focus!', editor)
        },
        onEditorReady(editor) {
            console.log('editor ready!', editor)
        }

    },
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
    @custom-selector :--heading h1, h2, h3, h4, h5, h6;
    :root {
      --text-color: black;
  }
  :--heading {
   font-weight: 400;
}
body {
  color: var(--text-color);
}
.quill-editor {
    width: 80%;
    height: 400px;
    margin: 0 auto;
}
.quill-code {
    border: none;
    height: auto;
    > code {
      width: 100%;
      margin: 0;
      padding: 1rem;
      border: 1px solid #ccc;
      border-top: none;
      border-radius: 0;
      height: 10rem;
      overflow-y: auto;
      resize: vertical;
    }
  }
</style>
