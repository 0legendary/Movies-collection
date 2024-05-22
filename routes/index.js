var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
  const items = [
    { name: 'IPhone', price: 100000, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTXdkBMYXWjl4swIBb-g8j-GRAxWz5Jfpx1A2GL4aqtw&s' },
    { name: 'Samsung', price: 70000, url: 'https://images.samsung.com/is/image/samsung/p6pim/in/2401/gallery/in-galaxy-s24-sm-s921blbcins-thumb-539572328'  },
    { name: 'Sony', price: 50000, url: 'https://sony.scene7.com/is/image/sonyglobalsolutions/1640-primary_image_1200-2?$categorypdpnav$&fmt=png-alpha' },
    { name: 'Redmi', price: 75000, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR27QYKDWleeR4SPLjNWmHq-hG_pvBr0tcTZaUa6Wtjg&s'  },
    { name: 'OnePlus', price: 90000, url: 'https://image01-in.oneplus.net/ebp/202302/08/1-m00-4e-16-cpgm7mpjxnoabtqjaah4p22vdfq137.png'  },
  ];
  res.render('Home', { title: 'Mobiles', items: items });
});

module.exports = router;
