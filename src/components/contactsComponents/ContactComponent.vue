<template>
<b-container class="x p-5">
    <b-form @submit="submit" method="post" enctype="text/plain"  class="bg-dark y text-white text-center animate__animated animate__backInDown">
        <h3 class="mt-3">Contact</h3>
            <b-row class="mt-3 p-2">
                <b-col sm="1"></b-col>
                <b-col sm="3">
                    <label for="input-email">Email:</label>
                </b-col>
                <b-col sm="5">
                    <b-form-input v-model="form.email" id="input-email" size="sm" placeholder="Enter your email"></b-form-input>
                </b-col>
            </b-row>
            <b-row class="p-2">
                <b-col sm="1"></b-col>
                <b-col sm="3">
                    <label for="input-subject">Subject:</label>
                </b-col>
                <b-col sm="5">
                    <b-form-input v-model="form.subject" type="text" id="input-subject" size="sm" placeholder="Enter the subject"></b-form-input>
                </b-col>
            </b-row>
            <b-row class="p-2">
                <b-col sm="1"></b-col>
                <b-col sm="3">
                    <label for="input-subject">Message:</label>
                </b-col>
                <b-col sm="5">
                    <b-form-textarea
                    id="input-subject"
                    placeholder="Enter something..."
                    rows="3"
                    v-model="form.message"
                    ></b-form-textarea>
                </b-col>
            </b-row>
            <b-row>
                <b-col sm="12" class="p-3" >
                    <b-button type="submit" variant="outline-info">Submit</b-button>
                </b-col>
                
            </b-row>
        </b-form>
    </b-container>
</template>

<script>
export default {
    name:'ContactComponent',
    data(){
        return{
            yourEmail:'fernandes.edgarsilva10@gmail.com',
            form: {
                email: '',
                subject: '',
                message: '',
            }
        }
    },
    methods:{
        submit(event){
            event.preventDefault()
            if(this.form.email || this.form.subject || this.form.message){
                window.location.href="mailto:" + this.yourEmail+ "?subject="+this.form.subject+ "&body=" +this.form.message;
            } 
        }
    }
}
</script>

<style scoped>
.y{
    border-radius: 15px;
}
.x{
    height: 100vh;
}
</style>