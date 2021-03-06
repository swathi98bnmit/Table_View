class UI {

    //#region Modal Menu Static Method
    
    static modalMenu(){
      
        const modal = document.createElement('div');
        modal.setAttribute("id", "modalMenu");
        modal.classList.add("modal");
        modal.style.cssText = `
            padding: 0;
            display: block;
            position: fixed;
            z-index: 100000;
            right: 599px;
            top: 120px;
            left: 200px;
            width: 60%;
            height:500px;
            border-style: solid;
            border-color: lightgray;
            border-width: 1px;
            overflow: auto;
            background-color: rgb(243, 243, 243);
            animation-name: modalopen;
            animation-duration: 0.5s;
            body .modal-dialog { /* Width */
                max-width: 100%;
                width: auto !important;
                display: inline-block;
            }

        `;
        
        const modalContent = document.createElement('div');
        const btn = document.createElement('input')
        modalContent.classList.add("modal-content");
        modalContent.style.cssText = `
			all: unset;
			position: relative;
			float: left;
			padding: 20px;
			width: auto;
			height: 400px;
			border-radius: 100px;
			margin-left:30px;
			margin-bottom:200px;
        `;    
        modalContent.innerHTML = `
        <head>
			<meta name="viewport" content="width=device-width, initial-scale=1">
			<title>Google Docs click simulation</title>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
			<style>
                table { font-family: arial, sans-serif; border-collapse: collapse; width: 100%; font-weight: 400}			  
                td, th { border: 1px solid #dddddd; text-align: left;	padding: 8px; font-weight: 400 ; }
                th { font-weight: bold;}			  
                tr:nth-child(even) { background-color: #dddddd; font-weight: 400}
                ul { list-style-type: none; font-weight: 400 }
                li { float: left; padding-right: 15px; font-weight: 400;  }                
                button {  color: #fff; background-color: #007bff; border-color; #007bff; font-weight: 400; text-align: center; vertical-align: middle; padding: 7px 15px 7px 15px; border-radius: 0.25rem; }
                
                .content {
                    padding: 0 18px;
                    display: block;
                    overflow: hidden;
                    background-color: #f1f1f1;
                }
                .brand_col {font-family: BogleWeb; line-height: 22px;}
                .mystyle {width: 10%; height: 10%; border-radius: 50%; color: #fff; background-color: #007bff; border-color; #007bff;  font-size: 10px; text-align: center; vertical-align: middle; padding: 7px 15px 7px 15px; border-radius: 0.25rem;}
			</style>
		</head>
        <body>
        <div id="myclass">
            <div>
                
              <button accesskey="i" id="myButton3" type="button">Increase Font</button>
              <br/>
                

                <button accesskey="h" id="myButton4" type="button">Decrease Font</button>
                <br/>

                <div>
                <button accesskey="9" id="myButton" type="button" class="collapsible">Filter Column</button>
                <div class="content">
                <div id="checkbox_div" style='padding-top: 10px; padding-bottom: 10px;'>
                    
                        <input type="checkbox" id="brand_col" checked>Product Title<br/>
                        <input type="checkbox" id="price_col" checked>Price<br/>
                        <input type="checkbox" id="model_col" checked>Model<br/>
                        <input type="checkbox" id="delivery_col" checked>Delivery<br/>
                        
                        

                        

                </div>    
                </div>
                </div>


                <div>
                <button accesskey="s" id="myButton5" type="button" class="collapsible1">Sort me</button>
                <div class="content">
                <div id="checkbox_div" style='padding-top: 5px; padding-bottom: 5px;'>
                    
                        <input type="radio" id="myButtona" >Product Title<br/>
                        <input type="radio" id="myButtonb" >Price<br/>
                        <input type="radio" id="myButtonc" >Model<br/>
                        <input type="radio" id="myButtond" >Delivery<br/>
                       
                        
                    
                </div>
                </div>
                </div>

                


                

            </div>
            
            <table id="mytable" style='width: 100%; margin-top: 20px;'>   
                <tr style="background-color: #FAEBD7; color: black; ">
                     
                    <th style='width: 45%' id="brand_col_head">Product Title</th>
                    <th style='width: 10%' id="price_col_head">Price</th>
                    <th style='width: 30%' id="model_col_head">Model</th>
                    <th style='width: 30%' id="delivery_col_head">Delivery</th>
                   
                   


                </tr>
                <tr style="background-color: #F0F8FF; color: black; width:100%">
                   
                    <td class="brand_col"><a href="https://www.walmart.com/ip/Acer-Spin-3-Thin-Light-Convertible-2-in-1-14-HD-Touch-AMD-Ryzen-3250U-Dual-Core-Mobile-Processor-Radeon-Graphics-4GB-DDR4-128GB-NVMe-SSD-Windows-10-S/534663575">Acer Spin 3 Thin and Light 4GB DDR4, 128GB NVMe SSD, Windows 10 in S mode, SP314-21-R56W</a></td>
                    <td class="price_col"><b>$369.00</b></td>
                    <td class="model_col">NX.A4FAA.001</td>
                    <td class="delivery_col">Free 2-day delivery</td>
                    
                    

                </tr>
                <tr style="background-color: #FAEBD7; color: black; width:100% ">
                    
                    <td class="brand_col"><a href="https://www.walmart.com/ip/Acer-R13-Mediatek-2-in-1-Touch-4GB-64GB-Chromebook-13-3-FHD-Display-MediaTek-MT8173C-Quad-Core-Processor-4GB-LPDDR3-64GB-eMMC-Chrome-OS-CB5-312T-K95W/190329198">Acer R13 Mediatek 2-in-1 Touch 4GB LPDDR3, 64GB eMMC, Chrome OS - CB5-312T-K95W</a></td>
                    <td class="price_col"><b>$327.00</b></td>
                    <td class="model_col">NX.GL4AA.018</td>
                    <td class="delivery_col">Free 2-day delivery</td>
                    
                   
                </tr>
                <tr style="background-color: #F0F8FF; color: black; width:100% ">
                    
                    <td class="brand_col"><a href="https://www.walmart.com/ip/Acer-Swift-3-13-5-4K-UHD-PC-Laptops-Intel-Core-i5-1035G4-8GB-RAM-256GB-SSD-Windows-10-Silver-SF313-52-526M/637213460">Acer Swift 3 13.5" 4K UHD PC Laptops 8GB RAM, 256GB SSD, Windows 10, Silver, SF313-52-526M</a></td>
                    <td class="price_col"><b>$749.00</b></td>
                    <td class="model_col">SF313-52-526M</td>
                    <td class="delivery_col">Free 2-day delivery</td>
                   
                    
                </tr>
                <tr style="background-color: #FAEBD7; color: black; width:100% ">
                   
                    <td class="brand_col"><a href="https://www.walmart.com/ip/Lenovo-Chromebook-Flex-3-11-11-6-Intel-Celeron-N4020-4GB-32GB-eMMC-Intel-UHD-Graphics-600-Abyss-Blue-Chrome-OS-82BB0009US/999936773?wpa_bd=&wpa_pg_seller_id=F55CDC31AB754BB68FE0B39041159D63&wpa_ref_id=wpaqs:rwbvaqAuWVNyhTlFhQcJmQRvhIAU5cT8J0mze9z2QxzXE537oSY8OqhekOJkjaePgQSJ6odAn4kKNkJmVifRIJIAsaoOeAwnwciahoThUdkWoRuyhQ8rNaHjvWf0suVqS3KJ99kuOoWiPmv0bPOmqd6SFeZJtp_OsmrI_mxfwg1YlN0UVGOAJz0m2C3aIX4szvutgEcxFvKSYet36H1sSQ&wpa_tag=&wpa_aux_info=&wpa_pos=1&wpa_plmt=1145x1145_T-C-IG_TI_1-6_HL-INGRID-LIST-NY&wpa_aduid=4fd1e618-7dd0-4a5f-bca3-6a3c59e789d5&wpa_pg=search&wpa_pg_id=Lenovo%20ChromeBook%203%2011.6%20Chrome%20Laptop&wpa_st=Lenovo%2BChromeBook%2B3%2B116%2BChrome%2BLaptop&wpa_tax=3944_3951&wpa_bucket=__bkt__">Lenovo ChromeBook 3 11.6 Chrome Laptop 8GB RAM, 256GB SSD, Windows 10, Silver, SF313-52-526M</a></td>
                    <td class="price_col"><b>$169.00</b></td>
                    <td class="model_col">82BA0000US</td>
                    <td class="delivery_col">Free 2-day delivery</td>
                   
                    

                </tr>
                <tr style="background-color: #F0F8FF; color: black; width:100% ">
                   
                    <td class="brand_col"><a href="https://www.walmart.com/ip/EVOO-11-6-Ultra-Thin-Notebook-HD-Display-Intel-Celeron-Processor-64GB-Storage-4GB-Memory-Front-Camera-HDMI-Windows-10-S-Microsoft-365-Personal-1-Year/590793764">EVOO 11.6" Ultra Thin Notebook 4GB Memory, Front Camera, HDMI, Windows 10 S</a> </td>
                    <td class="price_col"><b>$149.00</b></td>
                    <td class="model_col"> EV-C-116-7BK</td>
                    <td class="delivery_col">Free 2-day delivery</td>
                    
                    
                    
                </tr>
                <tr style="background-color: #FAEBD7; color: black; width:100% ">
                   
                    <td class="brand_col"><a href="https://www.walmart.com/ip/Core-Innovations-CLT136401BL-14-Notebook-Intel-Atom-Z3850-4GB-RAM-64GB-SSD-1920-x-1080-Windows-10-S-Black/151124072?wpa_bd=&wpa_pg_seller_id=F55CDC31AB754BB68FE0B39041159D63&wpa_ref_id=wpaqs:INNlmCpE4hXCZFqBU1WXmjcQ_P4LZqNq8rezdgflNUJe5FCq0mKjekxeIj-i--K5gQSJ6odAn4kKNkJmVifRIPyih1YMjBLXnlNnExxcfas6cgHgriqAKiGF72X8ieyRS3KJ99kuOoWiPmv0bPOmqd6SFeZJtp_OsmrI_mxfwg1HpBFxoJlrV99iFpbiEjsCzvutgEcxFvKSYet36H1sSQ&wpa_tag=&wpa_aux_info=&wpa_pos=1&wpa_plmt=1145x1145_T-C-IG_TI_1-6_HL-INGRID-LIST-NY&wpa_aduid=8bda6803-7e26-484f-8283-b9bc5537b17b&wpa_pg=search&wpa_pg_id=Core%20Innovations%20CLT146401%2014.1%22%20Laptop&wpa_st=Core%2BInnovations%2BCLT146401%2B141%2BLaptop&wpa_tax=3944_3951&wpa_bucket=__bkt__">Core Innovations CLT146401 14.1" Laptop 4GB RAM - 64GB SSD - 1920 x 1080 - Windows 10 S</a></td>
                    <td class="price_col"><b>$179.00</b></td>
                    <td class="model_col">CLT146401BL</td>
                    <td class="delivery_col">Free 2-day delivery</td>
                    
                   
                </tr>
                <tr style="background-color: #F0F8FF; color: black; width:100%">
                    
                    <td class="brand_col"><a href="https://www.walmart.com/ip/HP-15-6-Pentium-4GB-128GB-Laptop-Scarlet-Red/363405465">HP 15.6" Pentium 4GB/128GB Laptop 4GB/128GB Laptop</a> </td>
                    <td class="price_col"><b>$299.00</b></td>
                    <td class="model_col"> 15-dw1083wm</td>
                    <td class="delivery_col">Free delivery</td>
                    
                    

                </tr>
                <tr style="background-color: #FAEBD7; color: black; width:100% ">
                    
                    <td class="brand_col"><a href="https://www.walmart.com/ip/Acer-Chromebook-311-11-6-HD-Intel-Celeron-N4020-4GB-LPDDR4-32GB-eMMC-Pure-Silver-Gigabit-WiFi-Bluetooth-5-0-CB311-9H-C4XC/588464990?wpa_bd=&wpa_pg_seller_id=F55CDC31AB754BB68FE0B39041159D63&wpa_ref_id=wpaqs:mczJe-tUH2Wk9DClyqfTFiDTQQa1-u_Ac44mq5BjwUIbDyp8_9GkiR2jbz1pm7MzgQSJ6odAn4kKNkJmVifRIDJKYA0_OTVNbnwyvuEmY4f0-QP8yWERLyLaH3N6qTup9mAi6hdbV69_rVVEN8anI_4IRPbSg6FvAbpvXwNd2RmHBj419kS33DrZRHN-k5epXwgThzqdNCEKU6mvbPP_n7O9mOFphX4Pa3EeNvJuJW57GZLJpl6HY51IH62-MxYCdGRtcU_cABru3Y28QOgDYw&wpa_tag=&wpa_aux_info=&wpa_pos=1&wpa_plmt=1145x1145_T-C-IG_TI_1-6_HL-INGRID-GRID-NY&wpa_aduid=2d612e2b-9c64-4f61-96c9-08ab743b8a17&wpa_pg=search&wpa_pg_id=Acer%20315%2015.6%22%20Celeron%204GB/32GB%20Chromebook&wpa_st=Acer%2B315%2B156%2BCeleron%2B4GB32GB%2BChromebook&wpa_tax=3944_3951_1089430_1230091_1103213&wpa_bucket=__bkt__">Acer 315 15.6" Celeron 4GB/32GB Chromebook 4GB Ram 32GB Flash ChromeOS</a></td>
                    <td class="price_col"><b>$189.00</b></td>
                    <td class="model_col">NX.HKBAA.002</td>
                    <td class="delivery_col">Free delivery</td>
                   
                   

                </tr>
                <tr style="background-color: #F0F8FF; color: black; width:100% ">
                    
                    <td class="brand_col"><a href="https://www.walmart.com/ip/Lenovo-Ideapad-3-15-15-6-AMD-Ryzen-5-5500U-8GB-256GB-NVMe-TLC-SSD-AMD-Radeon-7-Graphics-Windows-10-Home-82KU003NUS/773741305?wpa_bd=&wpa_pg_seller_id=F55CDC31AB754BB68FE0B39041159D63&wpa_ref_id=wpaqs:rwbvaqAuWVNyhTlFhQcJmQRvhIAU5cT8J0mze9z2QxzXE537oSY8OqhekOJkjaePgQSJ6odAn4kKNkJmVifRIKnVn06iTIRvSHcjFSneaHvSEQh0Rab8JCDdSuaek8H6S3KJ99kuOoWiPmv0bPOmqd6SFeZJtp_OsmrI_mxfwg3EmRcpoTx-79W_8ilAaiPKzvutgEcxFvKSYet36H1sSQ&wpa_tag=&wpa_aux_info=&wpa_pos=1&wpa_plmt=1145x1145_T-C-IG_TI_1-6_HL-INGRID-LIST-NY&wpa_aduid=d8732d47-1372-4f84-9544-da15a2939e59&wpa_pg=search&wpa_pg_id=Lenovo%20IdeaPad%203%2015.6%22%20Laptop&wpa_st=Lenovo%2BIdeaPad%2B3%2B156%2BLaptop&wpa_tax=3944_3951&wpa_bucket=__bkt__">Lenovo IdeaPad 3 15.6" Laptop 8GB, 256GB NVMe TLC SSD, AMD Radeon 7 Graphics, Windows 10 Home</a></td>
                    <td class="price_col"><b>$416.00</b></td>
                    <td class="model_col"> 81WE0016US</td>
                    <td class="delivery_col">Free 2-day delivery</td>
                    
                   
                </tr>
                <tr style="background-color: #FAEBD7; color: black; width:100% ">
                   
                    <td class="brand_col"><a href="https://www.walmart.com/ip/Refurbished-Apple-MacBook-Pro-13-3-Laptop-LED-Intel-i5-3210M-2-5GHz-4GB-500GB-MD101LLA/708321782">Refurbished Apple MacBook Pro 13.3 Intel i5 3210M 2.5GHz 4GB 500GB - MD101LLA</a></td>
                    <td class="price_col"><b>$299.00</b></td>
                    <td class="model_col">MacBook</td>
                    <td class="delivery_col">Free 2-day delivery</td>
                    
                    
                </tr>
                <tr style="background-color: #F0F8FF; color: black; width:100% ">
                    
                    <td class="brand_col"><a href="https://www.walmart.com/ip/Lenovo-Ideapad-3-14-FHD-PC-Laptop-Intel-Core-i5-1035G1-8GB-RAM-512GB-SSD-Windows-10-Gray-81WD00U9US/899069660?wpa_bd=&wpa_pg_seller_id=F55CDC31AB754BB68FE0B39041159D63&wpa_ref_id=wpaqs:rwbvaqAuWVNyhTlFhQcJmQRvhIAU5cT8J0mze9z2QxzXE537oSY8OqhekOJkjaePgQSJ6odAn4kKNkJmVifRIOUPtxZDVgdrt9XMv9fAdYi_uf5moYhm6EDIlmsL-LTnS3KJ99kuOoWiPmv0bPOmqd6SFeZJtp_OsmrI_mxfwg13-YExNTwtvuLxIzVYQ0z9zvutgEcxFvKSYet36H1sSQ&wpa_tag=&wpa_aux_info=&wpa_pos=1&wpa_plmt=1145x1145_T-C-IG_TI_1-6_HL-INGRID-LIST-NY&wpa_aduid=545df785-757f-4801-a49d-df48cce14566&wpa_pg=search&wpa_pg_id=Lenovo%20IdeaPad%20Flex%205%2014%22%20FHD%20Convertible&wpa_st=Lenovo%2BIdeaPad%2BFlex%2B5%2B14%2BFHD%2BConvertible&wpa_tax=3944_3951&wpa_bucket=__bkt__">Lenovo IdeaPad Flex 5 14" FHD Convertible 4GB RAM, 128GB SSD, Graphite Grey, Windows 10S</a></td>
                    <td class="price_col"><b>$369.00</b></td>
                    <td class="model_col"> 81X2000HUS</td>
                    <td class="delivery_col">Free 2-day delivery</td>
                    
                   
                </tr>
                <tr style="background-color: #FAEBD7; color: black; width:100% ">
                    
                    <td class="brand_col"><a href="https://www.walmart.com/ip/Acer-Chromebook-Spin-311-CP311-3H-K3WL-Convertible-Laptop-MediaTek-MT8183C-Octa-Core-Processor-11-6-HD-Touchscreen-4GB-LPDDR4X-32GB-eMMC/661378059">Acer Chromebook Spin 311 CP311-3H-K3WL 4GB LPDDR4X, 32GB eMMC MT8183C Octa-Core Processor</a></td>
                    <td class="price_col"><b>$217.98</b></td>
                    <td class="model_col">NX.HUVAA.006</td>
                    <td class="delivery_col">Free 2-day delivery</td>
                   
                   

                </tr>
                <tr style="background-color: #F0F8FF; color: black; width:100% ">
                   
                    <td class="brand_col"><a href="https://www.walmart.com/ip/Lenovo-81JW0001US-Chromebook-S330-14-HD-Display-Mediatek-MT8173C-CPU-4GB-RAM-32GB-eMMC-SSD-Chrome-OS-Black/206750547">Lenovo 81JW0001US Chromebook S330 4GB RAM, 32GB eMMC SSD, Chrome OS</a> </td>
                    <td class="price_col"><b>$159.00</b></td>
                    <td class="model_col"> 81JW0001US</td>
                    <td class="delivery_col">Free 2-day delivery</td>
                    
                   
                </tr>
                <tr style="background-color: #FAEBD7; color: black; width:100% ">
                    
                    <td class="brand_col"><a href="https://www.walmart.com/ip/Gateway-14-1-FHD-Ultra-Slim-Notebook-Intel-Core-i5-1035G1-16GB-RAM-256GB-SSD-Tuned-THX-Audio-Fingerprint-Scanner-Webcam-HDMI-Cortana-Windows-10-Home/828696636?wpa_bd=&wpa_pg_seller_id=F55CDC31AB754BB68FE0B39041159D63&wpa_ref_id=wpaqs:8Otckb5t1FlIbS56uUrUrDcQ_P4LZqNq8rezdgflNUJe5FCq0mKjekxeIj-i--K5gQSJ6odAn4kKNkJmVifRIHZgv4BIai3fuZXzPbplEvmXdrG65wLQodTmUiY4g1lrS3KJ99kuOoWiPmv0bPOmqd6SFeZJtp_OsmrI_mxfwg2pokLwB1rHJE6ttXgta6XizvutgEcxFvKSYet36H1sSQ&wpa_tag=&wpa_aux_info=&wpa_pos=1&wpa_plmt=1145x1145_T-C-IG_TI_1-6_HL-INGRID-GRID-NY&wpa_aduid=1154d710-c89f-4302-8619-7f2b24723ecb&wpa_pg=search&wpa_pg_id=Gateway%2015.6%22%20FHD%20Ultra%20Slim%20Notebook&wpa_st=Gateway%2B156%2BFHD%2BUltra%2BSlim%2BNotebook&wpa_tax=3944_4131277_8460364_7819695&wpa_bucket=__bkt__">Gateway 15.6" FHD Ultra Slim Notebook 16GB RAM, 256GB SSD, Fingerprint Scanner, Cortana, Windows 10 Home</a></td>
                    <td class="price_col"><b>$419.00</b></td>
                    <td class="model_col">GWTN156-1BL</td>
                    <td class="delivery_col">Free 2-day delivery</td>
                    
                    
                </tr>
                <tr style="background-color: #F0F8FF; color: black; width:100%">
                    
                    <td class="brand_col"><a href="https://www.walmart.com/ip/HP-Pavilion-Gaming-16-FHD-Intel-Core-i5-10300H-Processor-NVIDIA-GeForce-GTX-1650-8GB-RAM-256GB-SSD-16-a0051wm/997224420?wpa_bd=&wpa_pg_seller_id=F55CDC31AB754BB68FE0B39041159D63&wpa_ref_id=wpaqs:8Otckb5t1FlIbS56uUrUrDcQ_P4LZqNq8rezdgflNUJe5FCq0mKjekxeIj-i--K5gQSJ6odAn4kKNkJmVifRIJIAsaoOeAwnwciahoThUdmhZrCqXDqP7NmIe3r-ytqYS3KJ99kuOoWiPmv0bPOmqd6SFeZJtp_OsmrI_mxfwg2MepF0U1m76YHqT8N3271uzvutgEcxFvKSYet36H1sSQ&wpa_tag=&wpa_aux_info=&wpa_pos=1&wpa_plmt=1145x1145_T-C-IG_TI_1-6_HL-INGRID-GRID-NY&wpa_aduid=230dc0a1-0a2a-491d-b26b-6420043bc283&wpa_pg=search&wpa_pg_id=HP%20Pavilion%20i5%20GTX%201650%208GB/256GB%20Gaming%20Laptop&wpa_st=HP%2BPavilion%2Bi5%2BGTX%2B1650%2B8GB256GB%2BGaming%2BLaptop&wpa_tax=3944_3951_7052607_1849032_9181128&wpa_bucket=__bkt__">HP Pavilion i5 GTX 1650 8GB/256GB Gaming Laptop 8GB RAM, 256GB SSD, DIGI CAMO</a></td>
                    <td class="price_col"><b>$683.92</b></td>
                    <td class="model_col"> 15-dk0056wm</td>
                    <td class="delivery_col">Free 2-day delivery</td>
                    
                    

                </tr>   
                <tr style="background-color: #FAEBD7; color: black; width:100% ">
                    
                    <td class="brand_col"><a href="https://www.walmart.com/ip/Lenovo-C340-11-6-Celeron-Touch-4GB-32GB-Chromebook-HD-Display-Intel-N4000-Dual-Core-Processor-4GB-Memory-32GB-eMMC-Solid-State-Drive-Chrome-OS-Platin/427724635">Lenovo ChromeBook C340 11.6 Chrome Touch 4GB Memory, 32GB eMMC Solid State Drive, Chrome OS</a></td>
                    <td class="price_col"><b>$259.00</b></td>
                    <td class="model_col">81TA0010US</td>
                    <td class="delivery_col">Free delivery</td>
                    
                   
                </tr>
            </table>
            </div>
            </body>`;

        const tagBtn = document.createElement('div');
        tagBtn.setAttribute('id', 'tagBtn');
        tagBtn.innerText = '';
        tagBtn.style.cssText = `background-color: #EAEAEA;`;        

        modalContent.appendChild(tagBtn);
        modal.appendChild(modalContent)
        return modal;
    }
    
    //#endregion
    
    //#region Close Modal Static Method
    static closeMenu() {
        let body = document.querySelector('body');
        body.firstChild.remove();
    }
    
    //#endregion

    //#region Add Tag To Menu Static Method
    static addTag(e, tag) {
        // Get rid of trailing white space
        tag = tag.replace(/\s*$/,"").toLowerCase();
         
        // create tag div
        let chip = document.createElement('div');
        chip.className = 'chip';
        chip.innerHTML = `${tag}<span class="closebtn";>&times;</span>`;
        
        // verify tag doesn't already exit TODO: instead of removing the chip, only add it if does not exists
        document.querySelectorAll('.chip').forEach(function(t) {
            if(t.textContent === (tag + '??')) {
                t.remove();
            }
        });

        
        // verify input field has content
        if(tag != '') {
            // append div to menu
            return chip;
        }
    }
    //#endregion
}
