var express 	= require('express'),
	app 		= express(),
	bodyParser 	= require('body-parser'),
	mongoose 	= require('mongoose');

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
mongoose.connect("mongodb://localhost/Pclub");
var resourceSchema = new mongoose.Schema({
  name: String,
	url: String,
	type: String
})
var password = "pclubuiet@learn"
var Resources = mongoose.model("Resources",resourceSchema)
members = [
	{
		name: "Gurpreet Singh",
		github: "https://github.com/gurpreetjarvis",
		image: "https://avatars0.githubusercontent.com/u/32022215?s=460&v=4",
		gmail: "amansingh9569@gmail.com"
	},
	{
		name: "Gurpreet Singh",
		github: "https://github.com/gurpreetjarvis",
		image: "https://avatars0.githubusercontent.com/u/32022215?s=460&v=4",
		gmail: "amansingh9569@gmail.com"
	},
	{
		name: "Gurpreet Singh",
		github: "https://github.com/gurpreetjarvis",
		image: "https://avatars0.githubusercontent.com/u/32022215?s=460&v=4",
		gmail: "amansingh9569@gmail.com"
	},
	{
		name: "Divyam Madaan",
		github: "https://github.com/divyam3897",
		image: "https://avatars3.githubusercontent.com/u/14874091?s=400&v=4",
		gmail: "divyammadaan@gmail.com"
	},
	{
		name: "Gurpreet Singh",
		github: "https://github.com/gurpreetjarvis",
		image: "https://avatars0.githubusercontent.com/u/32022215?s=460&v=4",
		gmail: "amansingh9569@gmail.com"
	},
	{
		name: "Gurpreet Singh",
		github: "https://github.com/gurpreetjarvis",
		image: "https://avatars0.githubusercontent.com/u/32022215?s=460&v=4",
		gmail: "amansingh9569@gmail.com"
	},
	{
		name: "Gurpreet Singh",
		github: "https://github.com/gurpreetjarvis",
		image: "https://avatars0.githubusercontent.com/u/32022215?s=460&v=4",
		gmail: "amansingh9569@gmail.com"
	},
	{
		name: "Divyam Madaan",
		github: "https://github.com/divyam3897",
		image: "https://avatars3.githubusercontent.com/u/14874091?s=400&v=4",
		gmail: "divyammadaan@gmail.com"
	},
	{
		name: "Gurpreet Singh",
		github: "https://github.com/gurpreetjarvis",
		image: "https://avatars0.githubusercontent.com/u/32022215?s=460&v=4",
		gmail: "amansingh9569@gmail.com"
	},
	{
		name: "Gurpreet Singh",
		github: "https://github.com/gurpreetjarvis",
		image: "https://avatars0.githubusercontent.com/u/32022215?s=460&v=4",
		gmail: "amansingh9569@gmail.com"
	},
	{
		name: "Gurpreet Singh",
		github: "https://github.com/gurpreetjarvis",
		image: "https://avatars0.githubusercontent.com/u/32022215?s=460&v=4",
		gmail: "amansingh9569@gmail.com"
	},
	{
		name: "Divyam Madaan",
		github: "https://github.com/divyam3897",
		image: "https://avatars3.githubusercontent.com/u/14874091?s=400&v=4",
		gmail: "divyammadaan@gmail.com"
	},
	{
		name: "Gurpreet Singh",
		github: "https://github.com/gurpreetjarvis",
		image: "https://avatars0.githubusercontent.com/u/32022215?s=460&v=4",
		gmail: "amansingh9569@gmail.com"
	},
	{
		name: "Gurpreet Singh",
		github: "https://github.com/gurpreetjarvis",
		image: "https://avatars0.githubusercontent.com/u/32022215?s=460&v=4",
		gmail: "amansingh9569@gmail.com"
	},
	{
		name: "Gurpreet Singh",
		github: "https://github.com/gurpreetjarvis",
		image: "https://avatars0.githubusercontent.com/u/32022215?s=460&v=4",
		gmail: "amansingh9569@gmail.com"
	},
	{
		name: "Divyam Madaan",
		github: "https://github.com/divyam3897",
		image: "https://avatars3.githubusercontent.com/u/14874091?s=400&v=4",
		gmail: "divyammadaan@gmail.com"
	},
	{
		name: "Gurpreet Singh",
		github: "https://github.com/gurpreetjarvis",
		image: "https://avatars0.githubusercontent.com/u/32022215?s=460&v=4",
		gmail: "amansingh9569@gmail.com"
	},
	{
		name: "Gurpreet Singh",
		github: "https://github.com/gurpreetjarvis",
		image: "https://avatars0.githubusercontent.com/u/32022215?s=460&v=4",
		gmail: "amansingh9569@gmail.com"
	},
	{
		name: "Gurpreet Singh",
		github: "https://github.com/gurpreetjarvis",
		image: "https://avatars0.githubusercontent.com/u/32022215?s=460&v=4",
		gmail: "amansingh9569@gmail.com"
	},
	{
		name: "Divyam Madaan",
		github: "https://github.com/divyam3897",
		image: "https://avatars3.githubusercontent.com/u/14874091?s=400&v=4",
		gmail: "divyammadaan@gmail.com"
	},
	{
		name: "Gurpreet Singh",
		github: "https://github.com/gurpreetjarvis",
		image: "https://avatars0.githubusercontent.com/u/32022215?s=460&v=4",
		gmail: "amansingh9569@gmail.com"
	},
	{
		name: "Gurpreet Singh",
		github: "https://github.com/gurpreetjarvis",
		image: "https://avatars0.githubusercontent.com/u/32022215?s=460&v=4",
		gmail: "amansingh9569@gmail.com"
	},
	{
		name: "Gurpreet Singh",
		github: "https://github.com/gurpreetjarvis",
		image: "https://avatars0.githubusercontent.com/u/32022215?s=460&v=4",
		gmail: "amansingh9569@gmail.com"
	},
	{
		name: "Divyam Madaan",
		github: "https://github.com/divyam3897",
		image: "https://avatars3.githubusercontent.com/u/14874091?s=400&v=4",
		gmail: "divyammadaan@gmail.com"
	},
	{
		name: "Gurpreet Singh",
		github: "https://github.com/gurpreetjarvis",
		image: "https://avatars0.githubusercontent.com/u/32022215?s=460&v=4",
		gmail: "amansingh9569@gmail.com"
	},
	{
		name: "Gurpreet Singh",
		github: "https://github.com/gurpreetjarvis",
		image: "https://avatars0.githubusercontent.com/u/32022215?s=460&v=4",
		gmail: "amansingh9569@gmail.com"
	},
	{
		name: "Gurpreet Singh",
		github: "https://github.com/gurpreetjarvis",
		image: "https://avatars0.githubusercontent.com/u/32022215?s=460&v=4",
		gmail: "amansingh9569@gmail.com"
	},
	{
		name: "Divyam Madaan",
		github: "https://github.com/divyam3897",
		image: "https://avatars3.githubusercontent.com/u/14874091?s=400&v=4",
		gmail: "divyammadaan@gmail.com"
	},
	{
		name: "Gurpreet Singh",
		github: "https://github.com/gurpreetjarvis",
		image: "https://avatars0.githubusercontent.com/u/32022215?s=460&v=4",
		gmail: "amansingh9569@gmail.com"
	},
	{
		name: "Gurpreet Singh",
		github: "https://github.com/gurpreetjarvis",
		image: "https://avatars0.githubusercontent.com/u/32022215?s=460&v=4",
		gmail: "amansingh9569@gmail.com"
	},
	{
		name: "Gurpreet Singh",
		github: "https://github.com/gurpreetjarvis",
		image: "https://avatars0.githubusercontent.com/u/32022215?s=460&v=4",
		gmail: "amansingh9569@gmail.com"
	},
	{
		name: "Divyam Madaan",
		github: "https://github.com/divyam3897",
		image: "https://avatars3.githubusercontent.com/u/14874091?s=400&v=4",
		gmail: "divyammadaan@gmail.com"
	}
]
app.get('/',function(req,res){
  res.redirect('index')
})
app.get('/index',function(req,res){
  res.render('index')
})
app.get('/members',function(req,res){
  res.render('members',{members:members})
})
app.get('/about',function(req,res){
	res.render('about')
})
app.get('/resources',function(req,res){
	Resources.find({},function(err,resources){
			if(err){
				console.log('error!');
				res.redirect('/index')
			}else{
				res.render('resources',{resources:resources})
			}
		})
	})
app.get('/resources/new',function(req,res){
		res.render('new',{user:"safe"})
	})
app.post('/resources',function(req,res){
	var count = 0
	  for(var member of members){
			if(member.gmail == req.body.auth.email && password == req.body.auth.password){
				console.log('matched');
				Resources.create(req.body.resource, function(err, newResource){
		if(err){
			res.render("new");
		} else {
			res.redirect("/resources");
			console.log(newResource)
		}
	})
		break
		}
		count += 1
	}
	if(count == 32){
		console.log('user undefined')
		res.render('new',{user:"fake"})
	}
	})

app.listen(2000,function(){
    console.log('server started at 127.0.0.1:2000');
})
