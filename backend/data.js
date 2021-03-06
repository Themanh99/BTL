import bcrypt from 'bcryptjs';

const data =  {
    users:[
        {
            name:'ManhCT',
            email:'ManhCT@123.com.vn',
            password: bcrypt.hashSync('1234' , 8),
            isAdmin:true,
            isSeller:false,
        },
        {
            name:'ManhCT1',
            email:'ManhCT1@123.com.vn',
            password: bcrypt.hashSync('1234' , 8),
            isAdmin:false,
            isSeller:false,
        }
    ],
    products:[
        {
            name: 'Ananas Track 6 Suede Moonphase',
            description: 'Dựa trên cảm hứng từ việc tái hiện những sắc xám (Grey) khác nhau hoà cùng những trạng thái ánh sáng trên bề mặt mặt trăng, Ananas Track 6 Suede Moonphase Pack sử dụng chất liệu da lộn (suede) đặc trưng, được phủ toàn bộ thân giày với tông màu sáng tối sắp xếp hài hoà hợp lý. Đây chắc chắn là một sản phẩm must have với những ai yêu thích chất suede và những gam màu Grey trung tính.',
            trangthai:'true',
            kieudang:'Low top',
            dongsanpham:'Vintas',
            category: 'Giay',
            image: '/images/giay1.jpg',
            price: 60,
            ngaynhap: '21/02/2021',
            mau:'nâu',
            brand: 'Ananas',
            rating: 4.5,
            numreview: 10,
            soluongco: 0,
            isActive: true,
            cogiay: 40
        },
        {
            name: 'Jordan 4 Retro Golf White Cement',
            description: 'The Air Jordan 4 Golf ‘White Cement’ repurposes the iconic silhouette for use on the golf course. The upper faithfully recreates the look of the original 1989 colorway, featuring a white leather build, quarter panel netting and speckled detailing on the plastic wings and extended heel tab. The latter features an embossed Jumpman, complementing a second Jumpman logo on the woven tongue tag. Visible Nike Air cushioning enhances the midsole, supported by a full-length plate with seven removable spikes for maximum grip.',
            trangthai:'true',
            kieudang:'High top',
            dongsanpham:'Jordan',
            category: 'Giay',
            image: '/images/giay2.jpg',
            price: 220,
            ngaynhap: '21/02/2021',
            mau:'White/Tech Grey-Black-Fire Red',
            brand: 'Sneaker',
            rating: 4.5,
            numreview: 10,
            soluongco: 10,
            isActive: true,
            cogiay: 39
        },
        {

            name: 'Nike SB Dunk Low Supreme Black',
            description: 'The Supreme x Nike Dunk Low OG SB QS ‘Black’ represents an homage to the partner brands’ Dunk High release from 2003. The low-top brings back virtually every key feature of the older shoe, including a white leather base, printed gold stars and contrast-colored overlays in croc-embossed leather. Gold Nike hits at the heel tab and woven tongue tag are matched by a gilded Supreme lace jewel. Inside the shoe, Supreme and Nike SB branding decorates the custom sockliner, finished in a bold red hue and fitted with a Zoom Air unit for lightweight cushioning.',
            trangthai:'true',
            kieudang:'Low top',
            dongsanpham:'Vintas',
            category: 'Giay',
            image: '/images/giay3.jpg',
            price: 1175,
            ngaynhap: '21/02/2021',
            mau:'Black/Metallic Gold-White',
            brand: 'Nike',
            rating: 4.5,
            numreview: 10,
            soluongco: 10,
            isActive: true,
            cogiay: 38
        },
        {
            name: 'Supreme x Dunk Low OG SB QS Hyper Royal',
            description: 'The Supreme x Nike Dunk Low OG SB QS ‘Hyper Royal’ takes direct inspiration from the New York skate brand’s Dunk High collaboration from 2003. Like the high-top, this pair features a white leather base with metallic gold stars on the quarter panels and croc-embossed leather overlays in a contrasting hue. A standard Nike wordmark is embroidered in gold lettering on the heel tab,',
            trangthai:'true',
            kieudang:'Low top',
            dongsanpham:'Vintas',
            category: 'Giay',
            image: '/images/giay4.jpg',
            price: 200,
            ngaynhap: '21/02/2021',
            mau:'White/Metallic Gold/Hyper Blue',
            brand: 'Nike',
            rating: 4.5,
            numreview: 10,
            soluongco: 10,
            isActive: true,
            cogiay: 37
        },
        {
            name: 'Nike Dunk Low SP City Market',
            description: 'The Nike Dunk Low ‘City Market’ pays tribute to temporary street markets and the industrial packaging used to ship their various wares, including rice and coffee bags that are typically upcycled for miscellaneous use. Those burlap vessels are recreated on some of the mismatched textile panels that make up the composition of the upper, while colorful graphics give the nod to Blue Ribbon Sports, Nike’s precursor brand.',
            trangthai:'true',
            kieudang:'Low top',
            dongsanpham:'SP city',
            category: 'Giay',
            image: '/images/giay5.jpg',
            price: 400,
            ngaynhap: '21/02/2021',
            mau:'Multi-Color/Multi-Color',
            brand: 'Nike',
            rating: 4.5,
            numreview: 10,
            soluongco: 10,
            isActive: true,
            cogiay: 37
        },
        {
            name: 'Wmns Supernova Black Vivid Red',
            description: 'Dựa trên cảm hứng từ việc tái hiện những sắc xám (Grey) khác nhau hoà cùng những trạng thái ánh sáng trên bề mặt mặt trăng, Ananas Track 6 Suede Moonphase Pack sử dụng chất liệu da lộn (suede) đặc trưng, được phủ toàn bộ thân giày với tông màu sáng tối sắp xếp hài hoà hợp lý. Đây chắc chắn là một sản phẩm must have với những ai yêu thích chất suede và những gam màu Grey trung tính.',
            trangthai:'true',
            kieudang:'Low top',
            dongsanpham:'Vintas',
            category: 'Giay',
            image: '/images/giay6.jpg',
            price: 130,
            ngaynhap: '21/02/2021',
            mau:'Core Black/Cloud White/Vivid Red',
            brand: 'Adidas',
            rating: 4.5,
            numreview: 10,
            soluongco: 10,
            isActive: true,
            cogiay: 41
        },
        {
            name: 'Air Structure GS Black Smoke Grey',
            description: 'Dựa trên cảm hứng từ việc tái hiện những sắc xám (Grey) khác nhau hoà cùng những trạng thái ánh sáng trên bề mặt mặt trăng, Ananas Track 6 Suede Moonphase Pack sử dụng chất liệu da lộn (suede) đặc trưng, được phủ toàn bộ thân giày với tông màu sáng tối sắp xếp hài hoà hợp lý. Đây chắc chắn là một sản phẩm must have với những ai yêu thích chất suede và những gam màu Grey trung tính.',
            trangthai:'true',
            kieudang:'High top',
            dongsanpham:'Vintas',
            category: 'Giay',
            image: '/images/giay7.jpg',
            price: 120,
            ngaynhap: '21/02/2021',
            mau:'Black/Smoke Grey/Summit White',
            brand: 'Nike',
            rating: 4.5,
            numreview: 10,
            soluongco: 10,
            isActive: true,
            cogiay: 40
        },
        {
            name: 'Ananas Track 6 Suede Moonphase',
            description: 'Dựa trên cảm hứng từ việc tái hiện những sắc xám (Grey) khác nhau hoà cùng những trạng thái ánh sáng trên bề mặt mặt trăng, Ananas Track 6 Suede Moonphase Pack sử dụng chất liệu da lộn (suede) đặc trưng, được phủ toàn bộ thân giày với tông màu sáng tối sắp xếp hài hoà hợp lý. Đây chắc chắn là một sản phẩm must have với những ai yêu thích chất suede và những gam màu Grey trung tính.',
            trangthai:'true',
            kieudang:'Low top',
            dongsanpham:'Vintas',
            category: 'Giay',
            image: '/images/giay8.jpg',
            price: 60,
            ngaynhap: '21/02/2021',
            mau:'nâu',
            brand: 'Ananas',
            rating: 4.5,
            numreview: 10,
            soluongco: 10,
            isActive: true,
            cogiay: 39
        },
        {
            name: 'Ananas Track 6 Suede Moonphase',
            description: 'Dựa trên cảm hứng từ việc tái hiện những sắc xám (Grey) khác nhau hoà cùng những trạng thái ánh sáng trên bề mặt mặt trăng, Ananas Track 6 Suede Moonphase Pack sử dụng chất liệu da lộn (suede) đặc trưng, được phủ toàn bộ thân giày với tông màu sáng tối sắp xếp hài hoà hợp lý. Đây chắc chắn là một sản phẩm must have với những ai yêu thích chất suede và những gam màu Grey trung tính.',
            trangthai:'true',
            kieudang:'Low top',
            dongsanpham:'Vintas',
            category: 'Giay',
            image: '/images/giay9.jpg',
            price: 60,
            ngaynhap: '21/02/2021',
            mau:'nâu',
            brand: 'Ananas',
            rating: 4.5,
            numreview: 10,
            soluongco: 10,
            isActive: true,
            cogiay: 38
        },
        {
            name: 'Ananas Track 6 Suede Moonphase',
            description: 'Dựa trên cảm hứng từ việc tái hiện những sắc xám (Grey) khác nhau hoà cùng những trạng thái ánh sáng trên bề mặt mặt trăng, Ananas Track 6 Suede Moonphase Pack sử dụng chất liệu da lộn (suede) đặc trưng, được phủ toàn bộ thân giày với tông màu sáng tối sắp xếp hài hoà hợp lý. Đây chắc chắn là một sản phẩm must have với những ai yêu thích chất suede và những gam màu Grey trung tính.',
            trangthai:'true',
            kieudang:'Low top',
            dongsanpham:'Vintas',
            category: 'Giay',
            image: '/images/giay10.jpg',
            price: 60,
            ngaynhap: '21/02/2021',
            mau:'nâu',
            brand: 'Ananas',
            rating: 4.5,
            numreview: 10,
            soluongco: 10,
            isActive: true,
            cogiay: 39
        },
        {
            name: 'Ananas Track 6 Suede Moonphase',
            description: 'Dựa trên cảm hứng từ việc tái hiện những sắc xám (Grey) khác nhau hoà cùng những trạng thái ánh sáng trên bề mặt mặt trăng, Ananas Track 6 Suede Moonphase Pack sử dụng chất liệu da lộn (suede) đặc trưng, được phủ toàn bộ thân giày với tông màu sáng tối sắp xếp hài hoà hợp lý. Đây chắc chắn là một sản phẩm must have với những ai yêu thích chất suede và những gam màu Grey trung tính.',
            trangthai:'true',
            kieudang:'Low top',
            dongsanpham:'Vintas',
            category: 'Giay',
            image: '/images/giay11.jpg',
            price: 60,
            ngaynhap: '21/02/2021',
            mau:'nâu',
            brand: 'Ananas',
            rating: 4.5,
            numreview: 10,
            soluongco: 10,
            isActive: true,
            cogiay: 38
        },
        {
            name: 'Ananas Track 6 Suede Moonphase',
            description: 'Dựa trên cảm hứng từ việc tái hiện những sắc xám (Grey) khác nhau hoà cùng những trạng thái ánh sáng trên bề mặt mặt trăng, Ananas Track 6 Suede Moonphase Pack sử dụng chất liệu da lộn (suede) đặc trưng, được phủ toàn bộ thân giày với tông màu sáng tối sắp xếp hài hoà hợp lý. Đây chắc chắn là một sản phẩm must have với những ai yêu thích chất suede và những gam màu Grey trung tính.',
            trangthai:'true',
            kieudang:'Low top',
            dongsanpham:'Vintas',
            category: 'Giay',
            image: '/images/giay12.jpg',
            price: 60,
            ngaynhap: '21/02/2021',
            mau:'nâu',
            brand: 'Ananas',
            rating: 4.5,
            numreview: 10,
            soluongco: 10,
            isActive: true,
            cogiay: 41
        },
        {
            name: 'Yeezy Boost 350 V2 Ash Blue',
            description: 'The adidas Yeezy Boost 350 V2 ‘Ash Blue’ carries a re-engineered Primeknit upper constructed from a blend of slate blue, grey and black fibers. A pale yellow hue distinguishes the post-dyed monofilament side stripe woven into the sneaker’s lateral side panel, delivering added breathability and an unexpected pop of color. The sock-like upper rides on a full-length Boost midsole, wrapped up in a semi-translucent rubber cage for improved stability and durability.',
            trangthai:'true',
            kieudang:'Low top',
            dongsanpham:'Vintas',
            category: 'Giay',
            image: '/images/giay13.jpg',
            price: 60,
            ngaynhap: '21/02/2021',
            mau:'nâu',
            brand: 'Ananas',
            rating: 4.5,
            numreview: 10,
            soluongco: 10,
            isActive: true,
            cogiay: 40
        },
        {
            name: 'Yeezy Boost 350 V2 Ash Stone',
            description: 'he adidas Yeezy Boost 350 V2 ‘Ash Stone’ highlights subdued earth tones throughout its re-engineered Primeknit upper. The complementary blend of tan, brown and grey fibers is arranged in different weaves that create an intricate, patchwork-like design, offset by a coral-colored side stripe on the sneaker’s lateral side. ',
            trangthai:'true',
            kieudang:'Low top',
            dongsanpham:'Vintas',
            category: 'Giay',
            image: '/images/giay14.jpg',
            price: 60,
            ngaynhap: '21/02/2021',
            mau:'Ash Stone/Ash Stone/Ash Stone',
            brand: 'Adidas',
            rating: 4.5,
            numreview: 10,
            soluongco: 10,
            isActive: true,
            cogiay: 40
        },
        {
            name: 'LeBron 8 PS Empire Jade',
            description: 'Built for little kids, the Nike LeBron 8 PS ‘Empire Jade’ celebrates the 600th anniversary of Beijing’s Forbidden City, featuring an aged leather upper in a rich scarlet hue. Raw edges are stained yellow, matching LeBron James’ signature lion graphic embossed on the tongue. A contrasting black Swoosh is set farther back, so that its tapered tail extends to a pull tab affixed to the heel.',
            trangthai:'true',
            kieudang:'Low top',
            dongsanpham:'Vintas',
            category: 'Giay',
            image: '/images/giay15.jpg',
            price: 90,
            ngaynhap: '21/02/2021',
            mau:'nâu',
            brand: 'Nike',
            rating: 4.5,
            numreview: 10,
            soluongco: 10,
            isActive: true,
            cogiay: 39
        },
        {
            name: 'Jordan 4 Retro Taupe Haze (GS)',
            description: 'Offered in grade school sizing, the Air Jordan 4 Retro ‘Taupe Haze’ delivers a mostly neutral colorway of the classic silhouette. A subdued taupe finish is applied to an upper constructed from a unique blend of textured suede and cracked leather. Contrasting black hits make their way to the sneaker’s molded eyelets and structural wings, while pops of Infrared stand out on the tongue tag and interior tongue. A polyurethane midsole houses visible Nike Air cushioning in the heel for lightweight cushioning.',
            trangthai:'true',
            kieudang:'Low top',
            dongsanpham:'Vintas',
            category: 'Giay',
            image: '/images/giay16.jpg',
            price: 330,
            ngaynhap: '21/02/2021',
            mau:'Taupe Haze/Oil Grey-Off White-Infrared 23',
            brand: 'Jordan',
            rating: 4.5,
            numreview: 13,
            soluongco: 10,
            isActive: true,
            cogiay: 39
        }
    ]
}

export default data;