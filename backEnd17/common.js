exports.querySync = function(sql){
    return new Promise(function(resolve,reject){
        conn.query(sql,function(err,res){
            if (err)reject(err);
            resolve(res);
        })
    })
}

exports.getUserId = function(sessid){
    return new Promise(function(resolve,reject){
        conn.query('SELECT * FROM sess_users WHERE sessid=' + sessid,function(err,res){
            if (err)reject(err);
            resolve(res[0].id);
        })
    })
}

exports.set200 = function(res){
    res.writeHead(200,{
        "Content-Type":"text/html;charset=utf-8",
        "Access-Control-Allow-Origin":"*"
    });
}